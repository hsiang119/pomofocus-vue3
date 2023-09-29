<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavHeader from "./components/NavHeader.vue";

</script>

<template>
  <main class="xl:max-w-1200 lg:max-w-1000 md:max-w-600 w-full mx-auto my-0">
    <NavHeader/>
    <RouterView/>
  </main>
</template>

<style scoped>

</style>
