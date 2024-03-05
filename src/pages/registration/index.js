import { validate } from "/utils/validation.js";

const regForm = document.querySelector("#register-form");
const loginBtn = document.querySelector(".main-panel__btn-item_register");

regForm.addEventListener("submit", (event) => event.preventDefault());

loginBtn.addEventListener("click", (event) => {
    const login = regForm.elements.login.value;
    const password1 = regForm.elements.password1.value;
    const password2 = regForm.elements.password2.value;
    const email = regForm.elements.email.value;

    const loginErr = validate("login", login);

    if (!loginErr) {
        const emailErr = validate("email", email);

        if (!emailErr) {
            if (password1 !== password2) {
                alert("Passwords doesn't match!");
            } else {
                const passErr = validate("password", password);
                if (!passErr) {
                    alert("Request was send");
                } else {
                    alert(passErr);
                }
            }
        } else {
            alert(emailErr);
        }
    } else {
        alert(loginErr);
    }
});
