import { validateLogin, validatePassword } from "/validation.js";

const loginForm = document.querySelector(".main-panel__logreg-form");
const loginBtn = document.querySelector(".main-panel__btn-item_login");

loginForm.addEventListener("submit", (event) => event.preventDefault());

loginBtn.addEventListener("click", (event) => {
    const login = loginForm.elements.login.value;
    const password = loginForm.elements.password.value;

    if (validateLogin(login) && validatePassword(password)) {
        alert("Request was send");
        // do some fetch magick here after
    }
});
