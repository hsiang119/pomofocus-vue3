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
    <div class="box relative overflow-hidden h-[350px] bg-custom-gray rounded-[8px] mt-10 flex justify-center items-center flex-wrap ">
        <div class="form absolute top-[4px] right-[4px] bottom-[4px] left-[4px] z-[2] bg-gray-800 flex-col flex overflow-hidden">
            <p class="text-9xl w-full text-center mt-[40px]">{{ remainingTime }}</p>
            <button @click="handleTimeCountDown" class="my-0 mx-auto border w-[200px] text-3xl rounded-default p-5 mt-[40px]">
                {{ !isActive ? 'Start' : 'Pause' }}
            </button>
        </div>
    </div>

</template>

<style scoped>
    .box::before {
        @apply content-[''] absolute top-[-50%] left-[-50%] w-full h-[350px] bg-custom-gradient z-[1] animate-animate origin-bottom-right;
    }
    .box::after {
        @apply content-[''] absolute top-[-50%] left-[-50%] w-full h-[350px] bg-custom-gradient z-[1] animate-animate origin-bottom-right; 
        animation-delay: -3s;
    }
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