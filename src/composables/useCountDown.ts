import { ref, computed, watch, toValue, onUnmounted } from "vue";
import { useTimerStore } from '../stores/useTimerStore'
import { storeToRefs } from 'pinia'
import { onGetTime } from "../utils/timeFormat";
import { sendNotification } from "@/utils/common";



const initialState = ref<number>(25 * 60 * 1000);
const remainingTime = ref<string>('25:00');
let timer: ReturnType<typeof setInterval> | null = null;



export function useCountDown() {
  const store = useTimerStore();
  const { isActive, ...rest } = storeToRefs(store);

    const counter = computed((): number => {
      return initialState.value
    })

    function onStop(): void {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function switchMode(value: string): void{
      const result  = toValue(value)

      switch(result) {
        case 'Pomodoro':
          initialState.value = 25 * 60 * 1000;
          remainingTime.value = onGetTime(initialState.value);
          break;
        case 'Long Break':
          initialState.value = 15 * 60 * 1000;
          remainingTime.value = onGetTime(initialState.value);
          break;
        case 'Short Break':
          initialState.value = 5 * 60 * 1000;
          remainingTime.value = onGetTime(initialState.value);
          break;
        default:
          console.log("未定義的狀態！");
          break;
      }
    };

    watch(isActive,() => {
      onStop();
      if (isActive.value) {
        timer = setInterval(() => {
          initialState.value = counter.value - 1000;
          remainingTime.value = initialState.value <= 0 ? 'Time up' : onGetTime(initialState.value);
          if (initialState.value <= 0) {
            sendNotification("Pomofocus", { body: "Time up!" });
            onStop();
            store.changeActiveStatus();
          }
        }, 1000);
      } else {
        initialState.value = counter.value
        onStop();
      }
    });

    onUnmounted(() => {
      onStop();
    });

    return { remainingTime, switchMode }
}