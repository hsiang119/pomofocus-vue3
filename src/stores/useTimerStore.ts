import { ref } from 'vue'
import { defineStore } from 'pinia'
import { CountdownMode } from "../types";

export const useTimerStore = defineStore('timer', () => {
  const mode = ref(CountdownMode.pomodoro);
  const isActive = ref<boolean>(false);

  function changeActiveStatus(): void {
    isActive.value = !isActive.value;
  };
  
  function onStop():void {
    isActive.value = false;
  }

  function onStart():void {
    isActive.value = true;
  }
  return { mode, isActive, changeActiveStatus, onStop, onStart }
})
