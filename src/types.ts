export enum CountdownMode {
    pomodoro = "pomodoro",
    longbreak = "longbreak",
    shortbreak = "shortbreak"
}

export interface countdown_mode {
    id: number,
    title: 'Pomodoro' | 'Short Break' | 'Long Break',
    time: string
}

export interface NotifyConfig {
    body: string, 
    icon?: string,
}

export interface NavItem {
    id: string;
    name: string;
    icon?: string;
}

export type toastType = 'success' | 'failure' | ''
