import { validateLogin, validatePassword, validateEmail } from "/validation.js";

const regForm = document.querySelector(".main-panel__logreg-form");
const loginBtn = document.querySelector(".main-panel__btn-item");

regForm.addEventListener("submit", (event) => event.preventDefault());

loginBtn.addEventListener("click", (event) => {
    const login = regForm.elements.login.value;
    const password1 = regForm.elements.password1.value;
    const password2 = regForm.elements.password2.value;
    const email = regForm.elements.email.value;

    if (password1 !== password2) {
        alert("Passwords doesn't match!");
        return;
    }

    if (
        validateLogin(login) &&
        validateEmail(email) &&
        validatePassword(password1)
    ) {
        alert("Request was send");
        // do some fetch magick here after
    }
});
