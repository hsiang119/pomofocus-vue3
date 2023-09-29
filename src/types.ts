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