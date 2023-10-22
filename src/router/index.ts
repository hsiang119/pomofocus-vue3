import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginPage from "@/views/LoginPage.vue";
import AnalysisReport from "@/views/AnalysisReport.vue";
import CustomSetting from "@/views/CustomSetting.vue";
import NotFound from "@/views/NotFound.vue";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import useGlobalToast from "@/composables/useGlobalToast";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/analysis',
      name: 'analysis',
      component: AnalysisReport,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/setting',
      name: 'setting',
      component: CustomSetting,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    )
  })
}

const toast = useGlobalToast();

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next()
    } else {
      toast.msgHandler("You do not have permission to view this page. Please log in.", "failure", 3000)
      next("/login")
    }
  } else {
    next()
  }
})

export default router
