import { validate } from "/utils/validation.js";
import { NetAPI } from "/net.js";
import { render } from "/root.js";

const regForm = document.querySelector("#register-form");
const loginBtn = document.querySelector(".main-panel__btn-item_register");

const regRequest = new NetAPI("/register", "POST");

regForm.addEventListener("submit", (event) => event.preventDefault());

loginBtn.addEventListener("click", (event) => {
    const login = regForm.elements.login.value;
    const password1 = regForm.elements.password1.value;
    const password2 = regForm.elements.password2.value;
    const email = regForm.elements.email.value;

    const loginErr = validate("login", login);

    // stayed for fast testing cookie thing
    // regRequest
    //     .send(
    //         JSON.stringify({
    //             login: login,
    //             password: password1,
    //             username: login,
    //             email: email,
    //         })
    //     )
    //     .then((res) => {
    //         console.log(res);
    //         render("/");
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //         alert("Sign up was failed! Please try again later!");
    //     });

    if (!loginErr) {
        const emailErr = validate("email", email);

        if (!emailErr) {
            if (password1 !== password2) {
                alert("Passwords doesn't match!");
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
                        console.log(err)
                        alert("Sign up was failed! Please try again later!");
                    });
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
