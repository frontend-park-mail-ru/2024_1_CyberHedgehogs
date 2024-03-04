export function validateLogin(data) {
    const login = data.trim();
    if (!login) {
        alert("Login is required!");
        return false;
    } else if (login.length < 4) {
        alert("Login must be at least 4 characters!");
        return false;
    } else if (login.length > 30) {
        alert("Login max length 30 characters");
        return false;
    }
    return true;
}

export function validatePassword(data) {
    const pass = data.trim();
    if (!pass) {
        alert("Password is required!");
        return false;
    } else if (pass.length < 8) {
        alert("Password must be at least 8 characters!");
        return false;
    }
    return true;
}

export function validateEmail(data) {
    const email = data.trim();

    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email) {
        alert("Email is required!");
        return false;
    } else if (!re.test(email.toLowerCase())) {
        alert("Provide a valid email!");
        return false;
    }
    return true;
}
