import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyD66i1ri0md2o2Ow4RVApaWIjSQdM79RRY",
    authDomain: "pomofocus-vue3.firebaseapp.com",
    projectId: "pomofocus-vue3",
    storageBucket: "pomofocus-vue3.appspot.com",
    messagingSenderId: "1089476388969",
    appId: "1:1089476388969:web:c4939d029dadf83304daf8",
    measurementId: "G-9CL6V1FX1Y"
};

const app = initializeApp(firebaseConfig);

export default app
