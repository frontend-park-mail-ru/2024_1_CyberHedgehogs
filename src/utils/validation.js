const minLength = 8;
const maxLength = 30;
const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function validate(field, data) {
    const cleanData = data.trim();
    if (!cleanData) {
        return `${field} is required!`;
    } else if (cleanData.length < minLength) {
        return `${field} must be at least ${minLength} characters!`;
    } else if (cleanData.length > maxLength && field !== 'email') {
        return `${field} max length is ${maxLength} characters!`
    } else if (field === 'email' && !re.test(cleanData.toLowerCase())){
        return 'provide a vaild email'
    }
    return null;
}

