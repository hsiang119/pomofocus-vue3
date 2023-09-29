<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { NavItem } from "../types";

const isActive = ref<boolean>(false)

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

const handleBurgerMenu = () => {
  isActive.value = !isActive.value
}

</script>

<template>
  <header class="flex justify-between h-20 w-[97%] mb-[30px]">

      <h1 class="leading-loose contrast-20 w-[100px] text-center">
          <RouterLink to="/" class="animate-letterMove whitespace-nowrap">Pomofocus</RouterLink>
      </h1>
      
      <nav class="animate-fadeIn flex items-center gap-2 max-md:hidden">
          <ul class="flex">
              <li v-for="item in NAV_ITEMS" :key="item.id" class="leading-loose ml-5 min-h-full transition-transform transition-shadow duration-300 hover:translate-y-[2px] active:translate-y-[5px]">
                  <RouterLink :to="`/${item.name.toLowerCase()}`" class="text-base max-w-prose nav-item ">{{ item.name }}</RouterLink>
              </li>
          </ul>
      </nav>

      <div 
        :class="{ 'active': isActive }"
        class="md:hidden menu-btn relative flex justify-center items-center w-[80px] h-[80px] cursor-pointer transition duration-500 ease-in-out "
        @click="handleBurgerMenu"
      >
        <div class="menu-btn__burger w-[45px] h-[6px] bg-primary rounded-[2px] shadow-burger transition duration-500 ease-in-out"></div>
      </div>
  </header>
  

</template>

<style scoped>
    .menu-btn__burger::before, .menu-btn__burger::after {
        @apply content-[''] absolute w-[55px] h-[6px] bg-primary rounded-[5px] shadow-burger transition duration-500 ease-in-out;
    }

    .menu-btn__burger::before {
        @apply translate-y-[-16px];
    }

    .menu-btn__burger::after {
        @apply translate-y-[16px];
    }

    .menu-btn.active .menu-btn__burger {
        @apply text-center translate-x-[-50px] bg-transparent shadow-none;
    }

    .menu-btn.active .menu-btn__burger::before {
        @apply rotate-45 translate-x-[30px] translate-y-[0px];
    }

    .menu-btn.active .menu-btn__burger::after {
        @apply -rotate-45 translate-x-[30px] translate-y-[0px];
    }
</style>