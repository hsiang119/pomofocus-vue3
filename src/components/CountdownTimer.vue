<script setup lang="ts">
    import { ref, type Ref } from "vue";
    import CircularProgressBar from "./CircularProgressBar.vue";
    import { useTimerStore } from "../stores/useTimerStore";
    import { storeToRefs } from "pinia";
    import { useCountDown } from "../composables/useCountDown";

    interface countdown_mode {
        id: number,
        title: 'Pomodoro' | 'Short Break' | 'Long Break',
        time: string
    }

    const time = useTimerStore();
    const { isActive, mode } = storeToRefs(time);
    const { switchMode, remainingTime } = useCountDown();

    const COUNTDOWN_MODE:Ref<countdown_mode[]> = ref<countdown_mode[]>([
        {
            id: 1,
            title: 'Pomodoro',
            time: '25:00'
        },
        {
            id: 2,
            title: 'Short Break',
            time: '05:00'
        },
        {
            id: 3,
            title: 'Long Break',
            time: '15:00'
        }
    ])
    
    const onChangeTab = (value: string): void => {
        switchMode(value);
    }

    const handleTimeCountDown = (): void => {
        useCountDown();
        time.changeActiveStatus();
    }

</script>

<template>
    <section class="flex w-full h-full">
        <article class="w-[600px] h-[350px] bg-black m-auto rounded-default">
            <ul class="w-auto flex space-x-3 text-center text-xl cursor-pointer rounded-default justify-center items-center gap-6">
                <li @click="onChangeTab(item.title)" class="h-auto hover:text-cyan-500 border-transparent border-b-2 hover:border-b-cyan-500 hover:transition duration-500" v-for="item in COUNTDOWN_MODE" :key="item.id" >{{ item.title }}</li>
            </ul>
            <CircularProgressBar
                :isActive="isActive"
                :mode="mode"
                :remainingTime="remainingTime"
                @handle-time-count-down="handleTimeCountDown"
            />
            
        </article>
    </section>
</template>

<style scoped>

</style>
