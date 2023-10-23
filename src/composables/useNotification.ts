import { ref } from "vue";
import type { NotifyConfig } from "@/types";

export default function useNotification() {
    
    const requestPermission = () => {
        if (!('Notification' in window)) {
            console.log('This browser does not support notification');
            return;
        }
        if (Notification.permission !== "granted" && Notification.permission !== "denied") {
            Notification.requestPermission()
                .then(permission => {
                    console.log(permission);
                });
        }
    }

    const sendNotification = (title: string, options: NotifyConfig) => {
        if (Notification.permission === "granted") {
            const notification = new Notification(title, options);
        }
    }

    return { requestPermission, sendNotification }  
}