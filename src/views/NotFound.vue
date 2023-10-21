<script setup lang="ts">
    import { useRouter } from "vue-router";

    const router = useRouter();
</script>

<template>
    <main class="flex justify-center items-center flex-col w-[600px] h-[300px] my-0 mx-auto">
        <h2 class="text-5xl text-center mt-10">
            Oops! 404 Page not found.
        </h2>
        <button @click="() => router.push('/')" class="btn w-[180px] hover:text-light border-white text-base font-medium py-[10xp] px-[25px] m-auto leading-10 hover:shadow-activeButton transition-all duration-300 ease-in hover:">
            Back to home
        </button>
    </main>
</template>

<style scoped>

</style>