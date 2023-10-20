import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getAuth, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { useRouter } from "vue-router";

// 確保只初始化一次，故提出來
// const router = useRouter();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const useUserStore = defineStore('user', () => {
    const isLogin = ref<boolean>(false);
    const userName = ref<string>("");
    const userEmail = ref<string>("");
    const userPhotoUrl = ref<string>("")
    
    function checkIsLogin(): void {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              isLogin.value = true
              return;
            }
            isLogin.value = false
        });
    }

    function signOutWithGoogle(): void {
        signOut(auth)
        .then((res) => {
            // console.log(res);
            isLogin.value = false
        }).catch((error) => {
            console.log(error);
        });
    }

    function signInWithGoogle(): void {
        // console.log("登入");
        signInWithPopup(auth, provider)
        .then((result) => {
            // console.log(result);
            isLogin.value = true;
        }).catch((error) => {
            console.log(error);
        });
    }

    return { checkIsLogin, signOutWithGoogle, signInWithGoogle, userName, userEmail, isLogin, userPhotoUrl }
})
