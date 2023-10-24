<script setup lang="ts">
import { markRaw, onMounted } from "vue";
import { RouterView } from 'vue-router'
import NavHeader from "./components/NavHeader.vue";
import GlobalToast from "@/components/GlobalToast.vue";
import useGlobalToast from "@/composables/useGlobalToast";
import { requestPermission } from "@/utils/common";

const toast = useGlobalToast();

onMounted( () => {
  toast.component.value = markRaw(GlobalToast);
  requestPermission();
})

</script>

<template>
  <GlobalToast @close="() => toast.closeToast()" :show="toast.show.value" :message="toast.message.value" :type="toast.type.value" :display-time="toast.time.value" />

  <main class="xl:max-w-1200 lg:max-w-1000 md:max-w-600 w-[90vw] mx-auto my-0 h-screen">
    <NavHeader />

    <!-- <transition name="fade" mode="out-in">
      <RouterView/>
    </transition> -->

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    
  </main>
</template>

<style scoped>
  .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }
    .fade-enter-to, .fade-leave-from {
        opacity: 1;
    }
</style>
