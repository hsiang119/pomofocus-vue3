<script setup lang="ts">

const { isActive, mode, remainingTime } = defineProps<{
  isActive: boolean,
  mode: string,
  remainingTime: string | number
}>()

const emit = defineEmits<{
    handleTimeCountDown: [isActive: boolean, mode: string]
}>()

const handleTimeCountDown = () => {
    emit("handleTimeCountDown", isActive, mode);
}

</script>

<template>
    <div class="w-full h-[300px] bg-gray-800 rounded-default mt-10 flex justify-center items-center flex-wrap">
        <p class="text-9xl w-full text-center">{{ remainingTime }}</p>
        <button @click="handleTimeCountDown" class="border w-[200px] text-3xl rounded-default p-5 relative overflow-hidden">
            {{ !isActive ? 'Start' : 'Pause' }}
        </button>
    </div>

</template>

<style scoped>
    /* .button {
        all: unset;
        color: white;
        border: 2px solid white;
    }
    .button::after {
        @apply after:content-[''] after:absolute after:w-[50px] after:h-[300%] after:top-[-100%] after:left-[-50%] after:bg-white after:opacity-10 after:origin-center after:-rotate-45 after:transition after:duration-200 after:ease-in
    }

    .button:hover::after {
        @apply left-[120%]
    } */
</style>