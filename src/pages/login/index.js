import { validate } from "/utils/validation.js";
import { NetAPI } from "/net.js";
import { render } from "/root.js";

const loginForm = document.querySelector("#login-form");
const loginBtn = document.querySelector(".main-panel__btn-item_login");

const loginRequest = new NetAPI("/login", "POST");

loginForm.addEventListener("submit", (event) => event.preventDefault());

loginBtn.addEventListener("click", (event) => {
    const login = loginForm.elements.login.value;
    const password = loginForm.elements.password.value;

    const loginErr = validate("login", login);

    if (!loginErr) {
        const passErr = validate("password", password);

        if (!passErr) {
            // alert("Request was send");
            loginRequest
                .send(
                    JSON.stringify({
                        login,
                        password,
                    })
                )
                .then((res) => {
                    console.log(res);
                    render("/");
                })
                .catch((err) => {
                    console.log(err)
                    alert("Logging in  was failed! Please try again later!");
                });
        } else {
            alert(passErr);
        }
    } else {
        alert(loginErr);
    }
});
