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
            <button @click="handleTimeCountDown" class="btn w-[100px] relative inline-block text-light text-base font-medium border-none py-[10xp] px-[25px] m-auto leading-10 shadow-activeButton transition-all duration-300 ease-in hover:bg-transparent">
                <span class="relative block w-full h-full">
                    {{ !isActive ? 'Start' : 'Pause' }}
                </span>
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

    .btn::after {
        @apply content-[''] absolute h-[0px] w-[2px] bg-light shadow-activeButton transition-all duration-500 ease-in
    }

    .btn::before {
        @apply content-[''] absolute h-[0px] w-[2px] bg-light shadow-activeButton transition-all duration-500 ease-in
    }

    .btn::before {
        @apply right-0 top-0 h-full
    }
    .btn::after {
        @apply left-0 bottom-0 h-full
    }

    .btn:hover:before {
        @apply transition-all duration-300 ease-in
    }

    .btn:hover:after {
        @apply transition-all duration-300 ease-in
    }

    .btn span::before{
        @apply absolute content-[''] bg-light shadow-light transition-all duration-500 ease-in
    }
    .btn span::after{
        @apply absolute content-[''] bg-light shadow-light transition-all duration-500 ease-in
    }

    .btn span::before{
        @apply left-0 top-0 w-0 h-[2px] 
    }

    .btn span::after{
        @apply right-0 bottom-0 w-0 h-[2px] 
    }

    .btn span:hover::before{
        @apply w-full
    }

    .btn span:hover::after{
        @apply w-full
    }
    
</style>