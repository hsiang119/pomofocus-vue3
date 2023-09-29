<script setup lang="ts">
    import { ref, type Ref, onMounted } from "vue";
    import NormalTimer from "./NormalTimer.vue";
    import { useTimerStore } from "../stores/useTimerStore";
    import { storeToRefs } from "pinia";
    import { useCountDown } from "@/composables/useCountDown";
    import type { countdown_mode, NotifyConfig } from "@/types";


    const time = useTimerStore();
    const { isActive, mode, ...rest } = storeToRefs(time);
    const { switchMode, remainingTime } = useCountDown();
    const activeTab = ref<string>("Pomodoro");
    

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
        activeTab.value = value;
        time.onStop();
        switchMode(value);
    }

    const handleTimeCountDown = (): void => {
        useCountDown();
        time.changeActiveStatus();
    }

</script>

<template>
    <section class="flex w-[97%] h-full">
        <article class="w-[600px] h-[350px] bg-black m-auto rounded-default">
            <ul class="w-auto flex space-x-3 text-center text-xl cursor-pointer rounded-default justify-center items-center gap-6 menu">
                <li 
                    @click="onChangeTab(item.title)" 
                    :class="{ 'tab-active': activeTab === item.title }"
                    class="block item h-auto hover:text-cyan-500 border-transparent border-b-2 hover:border-b-cyan-500 hover:transition duration-500"
                    v-for="item in COUNTDOWN_MODE"
                    :key="item.id"
                >
                    {{ item.title }}
                </li>
            </ul>
            <NormalTimer
                :isActive="isActive" 
                :mode="mode"
                :remainingTime="remainingTime"
                @handle-time-count-down="handleTimeCountDown"
            />
            
        </article>
    </section>
</template>

<style scoped>

.tab-active {
    @apply text-cyan-500 border-transparent border-b-2 border-b-cyan-500
}

.menu:has(.item:hover) .item:not(:hover) {
    color: #8f8f8f;
    border-bottom: 2px solid transparent;
    opacity: 0.5;
}

</style>
