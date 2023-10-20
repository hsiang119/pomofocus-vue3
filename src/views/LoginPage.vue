<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "../stores/useUserStore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { storeToRefs } from "pinia";
import { useRouter, onBeforeRouteLeave } from "vue-router";

const router = useRouter();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const user = useUserStore();
const { isLogin } = storeToRefs(user);

const usernameFocusedOrValid = ref<boolean>(false);
const passwordFocusedOrValid = ref<boolean>(false);
const emailFocusedOrValid = ref<boolean>(false);
const isActive = ref<boolean>(false);
const animate = ref<boolean>(false);

const handleUsernameFocus = (): void => {
    usernameFocusedOrValid.value = true;
};

const handleUsernameBlur = (e: Event) => {
    const inputElement = e.target as HTMLInputElement;
    usernameFocusedOrValid.value = !!inputElement.value;
};

const handlePasswordFocus = (): void => {
    passwordFocusedOrValid.value = true;
};

const handlePasswordBlur = (e: Event) => {
    const inputElement = e.target as HTMLInputElement;
    passwordFocusedOrValid.value  = !!inputElement.value;
};

const handleEmailFocus = (): void => {
    emailFocusedOrValid.value = true;
};

const handleEmailBlur = (e: Event): void => {
    const inputElement = e.target as HTMLInputElement;
    emailFocusedOrValid.value = !!inputElement.value;
};

const changeActive = () => {
    isActive.value = false;
    animate.value = true;
};

const isNotActive = () => {
    animate.value = false
}

const atSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("幹");
            console.log(result);
            isLogin.value = true;
            router.push("/");
        }).catch((error) => {
            console.log(error);
        });
}

// onBeforeRouteLeave(() => {
//     if (getAuth().currentUser) return true
//     const answer = window.confirm(
//         'Do you really want to leave? you have unsaved changes!'
//     )
//     // 取消导航并停留在同一页面上
//     if (!answer) return false
// })


</script>

<template>
    <main class="flex justify-center items-center">

        <div 
            :class="[
                isActive ? 'active translate-x-0 opacity-100 filter blur-0' : '', 
                'wrapper relative w-[750px] h-[450px] bg-transparent border-2 border-primary rounded shadow-custom-cyan overflow-hidden'
            ]"
        >
            <span 
                :class="[
                    animate ? '!rotate-[0deg] !skew-y-[0deg] delay-500' : '!delay-1600',
                    'duration-1000 ease-linear bg-animate absolute top-[-4px] right-0 w-[850px] h-[600px] bg-gradient-to-r from-[#081b29] to-[#0ef] rotate-[10deg] skew-y-[40deg] origin-bottom-right border-b-[3px] border-primary'
                ]"
            >
            </span>

            <span 
                :class="[
                    animate ? '!-rotate-[11deg] !-skew-y-[41deg] delay-1000' : '!delay-500',
                    'duration-1000 ease-linear bg-animate2 absolute top-full left-[250px] w-[850px] h-[700px] bg-black rotate-[11deg] skew-y-[41deg] origin-bottom-left border-t-[3px] border-primary'
                ]"
            >
            </span>

            <div 
                class="form-box login absolute top-0 w-[50%] h-[100%] flex flex-col justify-center left-0 pt-0 pr-[60px] pb-0 pl-[40px] duration-700"
            >
                <h2 
                    :class="[
                        'text-3xl text-white text-center ease-linear duration-700',
                        animate ? 'animation ease-linear duration-700 -translate-x-[120%] opacity-0 filter blur-[10px] delay-0' : '!delay-2100'
                    ]"
                >Login</h2>

                <form @submit.prevent="">
                    <div 
                        :class="[
                            animate ? 'animation ease-linear duration-700 -translate-x-[120%] delay-100 opacity-0 filter blur-[10px]' : '!delay-2200',
                            'ease-linear duration-700 input-box relative w-full h-[50px] my-[25px] mx-0'
                        ]"
                    >                        
                        <input
                            type="text"
                            required
                            :class="['w-full', 'h-full', 'bg-transparent', 'outline-none', 'border-b-2', 'border-b-white', 'duration-500', 'focus:border-b-primary', 'text-white', 'p-[10px]']"
                            @focus="handleUsernameFocus"
                            @blur="handleUsernameBlur"
                        />

                        <label 
                            :class="[
                                'absolute top-[50%] left-0 text-base text-white transform -translate-y-1/2 pointer-events-none duration-500',
                                usernameFocusedOrValid ? '!-top-[5px] !text-primary' : ''
                            ]"
                        >
                            Username
                        </label>

                    </div>

                    <div 
                        :class="[
                            animate ? 'animation ease-linear duration-700 -translate-x-[120%] delay-200 opacity-0 filter blur-[10px]' : '!delay-2300',
                            'ease-linear duration-700 input-box relative w-full h-[50px] my-[25px] mx-0'
                        ]"
                    >
                        <input
                            type="password"
                            required
                            :class="['w-full', 'h-full', 'bg-transparent', 'outline-none', 'border-b-2', 'border-b-white', 'duration-500', 'focus:border-b-primary', 'text-white', 'p-[10px]']"
                            @focus="handlePasswordFocus"
                            @blur="handlePasswordBlur"
                        />

                        <label 
                            :class="[
                                'absolute top-[50%] left-0 text-base text-white transform -translate-y-1/2 pointer-events-none duration-500',
                                passwordFocusedOrValid ? '!-top-[5px] !text-primary' : ''
                            ]"
                        >
                            Password
                        </label>
                    </div>

                    <button 
                        type="submit"
                        :class="[
                            animate ? 'animation ease-linear duration-700 -translate-x-[120%] delay-300 opacity-0 filter blur-[10px]' : '!delay-2400',
                            'ease-linear duration-700 btn relative w-full h-[45px] border-2 border-white outline-none rounded-[40px] cursor-pointer text-base text-white font-semibold shadow-neon after:content after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-primary after:shadow-neon after:opacity-0 hover:after:!opacity-100'
                        ]"
                    >
                        Login
                    </button>

                    <hr
                        :class="[
                            animate ? 'animation ease-linear duration-700 -translate-x-[120%] delay-300 opacity-0 filter blur-[10px]' : '!delay-2400',
                            'ease-linear duration-700 border-dashed mt-5 filter-[10px]'
                        ]"
                    >

                    <button
                        @click="atSignInWithGoogle"
                        :class="[
                            animate ? 'animation ease-linear duration-700 -translate-x-[120%] delay-300 opacity-0 filter blur-[10px]' : '!delay-2400',
                            'ease-linear duration-700 mt-5 border-2 border-white outline-none rounded-[40px] w-full h-[40px] hover:shadow-neon'
                        ]"
                    >
                        <font-awesome-icon :icon="['fab', 'google']" class="mr-4"/>
                        Login With Google
                    </button>

                    <div 
                        :class="[
                            animate ? 'animation ease-linear duration-700 -translate-x-[120%] delay-550 opacity-0 filter blur-[10px]' : '!delay-2500',
                            'ease-linear duration-700 logreg-link text-[14.5px] text-white text-center mt-5'
                        ]"
                    >
                        <p>
                            Don't have an account?
                            <a
                                
                                @click="changeActive" 
                                :class="['ml-3', 'register-link', 'text-primary', 'decoration-[none]', 'font-semibold', 'hover:underline', 'cursor-pointer']"
                            >
                                Sign Up
                            </a>
                        </p>
                    </div>

                </form>

                
            </div>

            <div 
                :class="[
                    'info-text', 
                    'login', 
                    'absolute', 
                    'top-0', 
                    'w-[50%]', 
                    'h-full', 
                    'right-0', 
                    'flex', 
                    'flex-col', 
                    'justify-center', 
                    'text-right', 
                    'pt-0', 
                    'pr-[40px]', 
                    'pb-[60px]', 
                    'pl-[150px]'
                ]"
            >
                <h2 
                    :class="[
                        animate ? 'animation ease-linear duration-700 translate-x-[120%] delay-550 opacity-0 filter blur-[10px]' : '!delay-2000',
                        'duration-700', 
                        'ease-linear', 
                        'text-[36px]', 
                        'text-white', 
                        'leading-snug', 
                        'uppercase'
                    ]"
                >
                    Welcome Back!
                </h2>
                <p 
                    :class="[
                        animate ? 'animation ease-linear duration-700 translate-x-[120%] delay-550 opacity-0 filter blur-[10px]' : '!delay-2100',
                        'duration-700', 
                        'ease-linear', 
                        'text-[16px]', 
                        'text-white'
                    ]"
                >
                    You can login using your email or a third-party service.
                </p>
            </div>


            <div 
                :class="[
                    animate ? '!translate-x-0' : '', 
                    animate ? '!opacity-100' : '', 
                    animate ? '!filter' : '', 
                    animate ? '!blur-0' : '', 
                    animate ? '!pointer-events-auto' : '', 
                    'form-box',
                    'register',
                    'absolute',
                    'top-0',
                    'w-[50%]',
                    'h-[100%]',
                    'flex',
                    'flex-col',
                    'justify-center',
                    'right-0',
                    'pt-0',
                    'pr-[40px]',
                    'pb-0',
                    'pl-[60px]',
                    'translate-x-[120%]',
                    'opacity-0',
                    'filter',
                    'blur-[10px]',
                    'duration-700',
                    'pointer-events-none'
                ]"
            >
            <h2 
                :class="[
                    animate ? '!translate-x-0' : '', 
                    animate ? '!opacity-100' : '', 
                    animate ? '!filter' : '', 
                    animate ? '!blur-0' : '', 
                    animate ? 'delay-1700' : '!delay-0', 
                    'opacity-0', 
                    'filter', 
                    'blur-[10px]', 
                    'duration-700', 
                    'translate-x-[120%]', 
                    'text-3xl', 
                    'text-white', 
                    'text-center'
                ]"
            >
                Sign Up
            </h2>

                <form @submit.prevent="">

                    <div
                        :class="[
                            animate ? '!translate-x-0 !opacity-100 !filter !blur-0 delay-1900' : '!delay-200',
                            'opacity-0', 'filter', 'blur-[10px]', 'duration-700', 'translate-x-[120%]', 'input-box', 'relative', 'w-full', 'h-[50px]', 'my-[25px]', 'mx-0'
                        ]"
                    >
                        <input
                            type="email"
                            required 
                            :class="[
                                'w-full', 'h-full', 'bg-transparent', 'outline-none', 'border-b-2', 'border-b-white', 'duration-500', 'focus:border-b-primary', 'text-white', 'p-[10px]'
                            ]"
                            @focus="handleEmailFocus"
                            @blur="handleEmailBlur"
                            
                        />
                        <label 
                            :class="[
                                'absolute', 'top-[50%]', 'left-0', 'text-base', 'text-white', 'transform', '-translate-y-1/2', 'pointer-events-none', 'duration-500',
                                emailFocusedOrValid ? '!-top-[5px] !text-primary' : ''
                            ]"
                        >
                            Email
                            
                        </label>
                    </div>

                    <div :class="[
                        animate ? '!translate-x-0 !opacity-100 !filter !blur-0 delay-2000' : '!delay-300',
                        'opacity-0', 'filter', 'blur-[10px]', 'duration-700', 'translate-x-[120%]', 'input-box', 'relative', 'w-full', 'h-[50px]', 'my-[25px]', 'mx-0'
                        ]">
                        <input
                        type="password"
                        required 
                        :class="[
                            'w-full', 'h-full', 'bg-transparent', 'outline-none', 'border-b-2', 'border-b-white', 'duration-500', 'focus:border-b-primary', 'text-white', 'p-[10px]'
                        ]"
                        @focus="handlePasswordFocus"
                        @blur="handlePasswordBlur"
                        />
                        <label :class="[
                            'absolute', 'top-[50%]', 'left-0', 'text-base', 'text-white', 'transform', '-translate-y-1/2', 'pointer-events-none', 'duration-500',
                            passwordFocusedOrValid ? '!-top-[5px] !text-primary' : ''
                        ]">
                        Password
                        </label>
                    </div>

                    <button 
                        type="submit"
                        :class="[
                        animate ? '!translate-x-0 !opacity-100 !filter !blur-0 delay-2100' : '!delay-400', 
                        'opacity-0', 'filter', 'blur-[10px]', 'duration-700', 'translate-x-[120%]', 'btn', 'relative', 'w-full', 'h-[45px]', 'border-2', 'border-white', 'outline-none', 'rounded-[40px]', 'cursor-pointer', 'text-base', 'text-white', 'font-semibold', 'shadow-neon', 'after:content', 'after:top-0', 'after:left-0', 'after:right-0', 'after:bottom-0', 'after:bg-primary', 'after:shadow-neon', 'after:opacity-0', 'hover:after:!opacity-100'
                        ]">
                        Sign Up
                    </button>
                    <div :class="[
                            animate ? '!translate-x-0 !opacity-100 !filter !blur-0 delay-2200' : '!delay-500', 
                            'opacity-0', 'filter', 'blur-[10px]', 'duration-700', 'translate-x-[120%]', 'logreg-link', 'text-[14.5px]', 'text-white', 'text-center', 'mt-5'
                        ]">
                        <p>
                            Already have an account?
                            <a @click="isNotActive" class="ml-3 register-link text-primary decoration-[none font-semibold] hover:underline cursor-pointer">Login</a>
                        </p>
                    </div>
                </form>
            </div>

            <div :class="[
                    animate ? '!translate-x-0 !opacity-100 !filter !blur-0 !pointer-events-auto' : '', 
                    'info-text', 'register', '-translate-x-[120%]', 'absolute', 'top-0', 'w-[50%]', 'h-full', 'left-0', 'flex', 'flex-col', 'justify-center', 'text-left', 'pt-0', 'pr-[150px]', 'pb-[60px]', 'pl-[40px]', 'pointer-events-none', 'duration-700', 'ease-linear', 'opacity-0', 'filter', 'blur-[10px]'
                ]">
                <h2 :class="[
                    animate ? '!translate-x-0 !opacity-100 !filter !blur-0 delay-1700' : '!delay-0',
                    'opacity-0', 'filter', 'blur-[10px]', 'duration-700', 'ease-linear', '-translate-x-[120%]', 'text-[36px]', 'text-white', 'leading-snug', 'uppercase'
                    ]">
                    Welcome on board!
                </h2>
                <p 
                    :class="[
                        animate ? '!translate-x-0 !opacity-100 !filter !blur-0 delay-1800' : '!delay-100',
                        'opacity-0', 'filter', 'blur-[10px]', 'duration-700', 'ease-linear', '-translate-x-[120%]', 'text-[16px]', 'text-white'
                    ]"
                >
                    You can register using your email or a third-party service.
                </p>
            </div>

        </div>

    </main>

</template>
