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
                const passErr = validate("password", password1);
                if (!passErr) {
                    alert("Request was send");
                    fetch("http://127.0.0.1:8050", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8",
                        },
                        body: JSON.stringify({
                            login: login,
                            password: password1,
                            email: email,
                        }),
                    })
                        .then((res) => res.text())
                        .then((res) => alert(res))
                        .catch((err) => console.log(err));
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
