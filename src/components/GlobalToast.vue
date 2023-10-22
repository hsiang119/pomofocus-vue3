<script setup lang="ts"> 
    import { watchEffect } from "vue";

    const { show, message, type, displayTime } = defineProps<{
        show: boolean
        message: string,
        type: 'success' | 'failure' | '',
        displayTime: number
    }>()

    const emit = defineEmits(["close"]);

    watchEffect(() => {
        if (show) {
            setTimeout(() => {
                emit('close')
            }, displayTime);
        }
    });
    
</script>

<template>
    <Teleport to="body">
        <transition name="slide">
            <div v-if="show" class="toast max-w-[320px] h-auto bg-white rounded fixed top-0 left-[50%] z-[9999] opacity-0">
                <div class="flex items-center w-auto my-auto mx-0 p-3">
                    <font-awesome-icon v-if="type === 'success'" :icon="['far', 'circle-check']" class="text-xl text-green-500 mr-5" />
                    <font-awesome-icon v-else :icon="['far', 'circle-xmark']" class="text-xl text-red-500 mr-5"/>
                    <span :class="['block', type === 'success' ? 'text-gray-700' : 'text-gray-400', 'text-xl']">{{ message }}</span>
                </div>
            </div>
        </transition>
    </Teleport>
</template>

<style scoped>
.toast {
    transform: translate(-50%, 0);
    animation: slide-in 1s forwards, slide-out 1s 2.5s forwards;
}

@keyframes slide-in {
    0% {
        transform: translate(-50%, -100%);
        opacity: 0;
    }
    100% {
        transform: translate(-50%, 50px);
        opacity: 1;
    }
}

@keyframes slide-out {
    0% {
        transform: translate(-50%, 50px);
        opacity: 1;
    }
    100% {
        transform: translate(-50%, -100%);
        opacity: 0;
    }
}


</style>
