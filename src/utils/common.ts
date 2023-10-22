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