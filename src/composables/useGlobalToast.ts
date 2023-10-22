import { ref } from "vue";
import type { toastType } from "@/types";

const component = ref()
const show = ref<boolean>(false)
const type = ref<toastType>('')
const message = ref<string>('')
const time = ref<number>(3000)

export default function useGlobalToast() {
    function msgHandler(newMsg: string, newType: toastType, newTime: number) {
        message.value = newMsg;
        type.value = newType;
        time.value = newTime;
        showToast()
    }

    function showToast() {
        show.value = true
    }

    function closeToast() {
        show.value = false
    }

    return {
        component,
        show,
        type,
        message,
        time,
        showToast,
        closeToast,
        msgHandler
    }
}