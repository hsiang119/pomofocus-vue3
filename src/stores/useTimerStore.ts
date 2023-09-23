import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const enum CountdownMode {
  Pomodoro = 'POMODORO',
  LongBreak = 'LONG_BREAK',
  ShortBreak = 'SHORT_BREAK'
}

export const useTimerStore = defineStore('timer', () => {
  // State
  const mode = ref(CountdownMode.Pomodoro);
  const isActive = ref<boolean>(false);

  // Getters
  const getMode = computed(() => mode.value)
  const getStatus = computed(() => isActive.value)

  // Actions
  function changeTimeStatus(timeMode: string): void {
    mode.value = timeMode as CountdownMode
  }

  function changeActiveStatus():void {
    isActive.value = !isActive.value
  }
 
  return { mode, isActive, getMode, getStatus, changeTimeStatus, changeActiveStatus }
})
