<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { NavItem } from "../types";


const NAV_ITEMS: Ref<NavItem[]> = ref<NavItem[]>([
  {
    id: 'item01',
    name: 'analysis'
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

<template>
  <header class="flex justify-between h-20 w-[97%] mb-[30px]">

      <h1 class="leading-loose contrast-20 w-[100px] text-center">
          <RouterLink to="/" class="animate-letterMove whitespace-nowrap">Pomofocus</RouterLink>
      </h1>
      
      <nav class="animate-fadeIn flex items-center gap-2">
          <ul class="flex">
              <li v-for="item in NAV_ITEMS" :key="item.id" class="leading-loose ml-5 min-h-full transition-transform transition-shadow duration-300 hover:translate-y-[2px] active:translate-y-[5px]">
                  <RouterLink :to="`/${item.name.toLowerCase()}`" class="text-base max-w-prose nav-item ">{{ item.name }}</RouterLink>
              </li>
          </ul>
      </nav>
  </header>
</template>

<style scoped>
    
</style>