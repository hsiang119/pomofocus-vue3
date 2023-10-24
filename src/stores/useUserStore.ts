import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { UserCredential } from "firebase/auth";
import { getAuth, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import useGlobalToast from "@/composables/useGlobalToast";
import router from '@/router';

// 確保只初始化一次，故提出來
const auth = getAuth();
const provider = new GoogleAuthProvider();
const toast = useGlobalToast();

export const useUserStore = defineStore('user', () => {
    const isLogin = ref<boolean>(false);
    const userName = ref<string | null>("");
    const userEmail = ref<string | null>("");
    const userPhotoUrl = ref<string | null>("")
    
    function checkIsLogin(): void {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              isLogin.value = true
              return;
            }
            isLogin.value = false
        });
    }

    function signOutWithGoogle(): Promise<void> {
        return signOut(auth)
            .then(() => {
                isLogin.value = false;
                userName.value = ""
                userEmail.value = ""
                userPhotoUrl.value = ""
                toast.msgHandler("You have successfully signed out.", "success", 3000)

            }).catch((error) => {
                console.log(error);
                isLogin.value = true;
                toast.msgHandler(error.code, "failure", 3000)
                throw error;
                
            });
    }

    function signInWithGoogle(): Promise<UserCredential> {
        return signInWithPopup(auth, provider)
            .then((result) => {
                const { user } = result;
                userName.value = user.displayName
                userEmail.value = user.email
                userPhotoUrl.value = user.photoURL
                isLogin.value = true;
                return result
            }).catch((error) => {
                console.log(error);
                isLogin.value = false;
                toast.msgHandler(error.code, "failure", 3000);
                throw error;
            });
    }

    function logInWithEmailAndPassword(email: string, password: string): void {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res);
                isLogin.value = true;
                router.push('/')
                toast.msgHandler("Login success!", "success", 3000)
            })
            .catch(error => {
                console.log(error);
                isLogin.value = false;
                toast.msgHandler(error.code, 'failure', 3000)
            })
    }

    function registerWithEmailAndPassword(email: string, password: string ) {
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            isLogin.value = true;
            router.push('/')
            toast.msgHandler("Registration successful, and you are now logged in.", "success", 3500)
        })
        .catch((error) => {
            isLogin.value = false;
            toast.msgHandler(error.code, "failure", 3500)
        });
    }

    return { checkIsLogin, signOutWithGoogle, signInWithGoogle, logInWithEmailAndPassword, registerWithEmailAndPassword, userName, userEmail, isLogin, userPhotoUrl }
})
