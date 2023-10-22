<script setup lang="ts">
    import { useRouter } from "vue-router";

    const router = useRouter();
</script>

<template>
    <main class="flex justify-center items-center flex-col w-[600px] h-[300px] my-0 mx-auto">
        <h2 class="text-5xl text-center mt-10">
            Oops! 404 Page not found.
        </h2>
        <button @click="() => router.push('/')" class="btn bg-transparent rounded-lg border w-[150px] hover:text-light border-[#ffffff80] text-base font-medium py-[10xp] px-[20px] m-auto leading-10 hover:shadow-activeButton transition duration-300 ease-linear hover:text-shadow-light-back-to-home focus:text-shadow-light-back-to-home">
            Back to home
        </button>
    </main>
</template>

<style scoped>
    .btn:hover,:focus {
        @apply bg-light border border-light shadow-back-home-btn text-shadow-light-back-to-home
    }
</style>