<template>
    <header class="flex gap-2 justify-around h-20 w-full mb-[30px]">
        <h1 class="leading-loose max-w-prose">
            <RouterLink to="/" >Pomofocus</RouterLink>
        </h1>
        
        <nav class="">
            <ul class="flex">
                <li v-for="item in NAV_ITEMS" :key="item.id" class="ml-5 min-h-full transition-transform transition-shadow duration-300 hover:translate-y-[2px] active:translate-y-[5px]">
                    <RouterLink to="/login" class="text-base leading-loose max-w-prose nav-item ">{{ item.name }}</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { ref } from "vue";

const NAV_ITEMS = ref([
  {
    id: 'item01',
    name: 'shared'
  },
  {
    id: 'item02',
    name: 'setting'
  },
  {
    id: 'item03',
    name: 'login'
  },
])



</script>

<style scoped>
    
</style>