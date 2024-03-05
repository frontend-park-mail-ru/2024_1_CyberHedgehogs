import { validate } from "/utils/validation.js";

const loginForm = document.querySelector("#login-form");
const loginBtn = document.querySelector(".main-panel__btn-item_login");

loginForm.addEventListener("submit", (event) => event.preventDefault());

loginBtn.addEventListener("click", (event) => {
    const login = loginForm.elements.login.value;
    const password = loginForm.elements.password.value;

    const loginErr = validate("login", login);

    if (!loginErr) {
        const passErr = validate("password", password);

        if (!passErr) {
            alert("Request was send");
        } else {
            alert(passErr);
        }
    } else {
        alert(loginErr);
    }
});
