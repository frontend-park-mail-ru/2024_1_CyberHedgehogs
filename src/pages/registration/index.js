import { validate } from "/utils/validation.js";
import { NetAPI } from "/net.js";
import { render } from "/root.js";

const regForm = document.querySelector("#register-form");
const loginBtn = document.querySelector(".main-panel__btn-item_register");

const rLoginInput = document.getElementById("reg-login");
const rLoginErrMsg = rLoginInput.querySelector(".logreg__msg-err");
const rEmailInput = document.getElementById("reg-email");
const rEmailErrMsg = rEmailInput.querySelector(".logreg__msg-err");
const rPass1Input = document.getElementById("reg-pass1");
const rPass1ErrMsg = rPass1Input.querySelector(".logreg__msg-err");
const rPass2Input = document.getElementById("reg-pass2");
const rPass2ErrMsg = rPass2Input.querySelector(".logreg__msg-err");

rLoginInput.addEventListener("input", () => {
    rLoginErrMsg.textContent = "";
});
rEmailInput.addEventListener("input", () => {
    rEmailErrMsg.textContent = "";
});
rPass1Input.addEventListener("input", () => {
    rPass1ErrMsg.textContent = "";
});
rPass2Input.addEventListener("input", () => {
    rPass2ErrMsg.textContent = "";
});

const regRequest = new NetAPI("/register", "POST");

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
                rPass2ErrMsg.textContent = "Passwords doesn't match!";
            } else {
                const passErr = validate("password", password1);
                if (!passErr) {
                    regRequest
                        .send(
                            JSON.stringify({
                                login: login,
                                password: password1,
                                username: login,
                                email: email,
                            })
                        )
                        .then((res) => {
                            console.log(res);
                            render("/");
                        })
                        .catch((err) => {
                            console.log(err);
                            alert(
                                "Sign up was failed! Please try again later!"
                            );
                        });
                } else {
                    rPass1Input.textContent = passErr;
                }
            }
        } else {
            rEmailErrMsg.textContent = emailErr;
        }
    } else {
        rLoginErrMsg.textContent = loginErr;
    }
});
