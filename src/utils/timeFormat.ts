export function onGetTime(distance: number): string {
    if (distance < 0) {
        return "00:00"
    }
    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    if (hours > 0 || minutes >= 60) {
        return "59:59";
    }
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}