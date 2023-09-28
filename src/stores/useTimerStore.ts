import { ref } from 'vue'
import { defineStore } from 'pinia'
import { CountdownMode } from "../types";

export const useTimerStore = defineStore('timer', () => {
  const mode = ref(CountdownMode.pomodoro);
  const isActive = ref<boolean>(false);

  function changeActiveStatus(): void {
    isActive.value = !isActive.value
  };

  return { mode, isActive, changeActiveStatus }
})
