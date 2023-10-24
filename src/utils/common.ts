import type { NotifyConfig } from "@/types";


export function containsWhitespace(str: string) {
    return /\s/.test(str);
}

export function validateEmail(email: string) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
}

export function validatePasswordCharacters(password: string) {
    return password.length >= 6
}


// Notification
export function requestPermission() {
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

export function sendNotification(title: string, options: NotifyConfig) {
    if (Notification.permission === "granted") {
        const notification = new Notification(title, options);
    }
}