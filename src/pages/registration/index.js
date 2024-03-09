import { validate } from "/utils/validation.js";
import { NetAPI } from "/net.js";

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
    regRequest
        .send(
            JSON.stringify({
                login: login,
                password: password1,
                username: login,
                email: email,
            })
        )
        .then((res) => console.log(res))
        .catch(() => {
            alert("Sign up was failed! Please try again later!");
        });
    // fetch("http://localhost:3031", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json;charset=utf-8",
    //     },
    //     body: JSON.stringify({
    //         login: login,
    //         password: password1,
    //         username: login,
    //         email: email,
    //     }),
    //     credentials: 'include'
    // })
    //     .then((res) => res.json())
    //     .then(response => console.log(response))
    //     .catch((err) => {
    //         console.log(err);
    //         alert(
    //             "Sign up was failed! Pleasee try again later!"
    //         );
    //     });

    // if (!loginErr) {
    //     const emailErr = validate("email", email);

    //     if (!emailErr) {
    //         if (password1 !== password2) {
    //             alert("Passwords doesn't match!");
    //         } else {
    //             const passErr = validate("password", password1);
    //             if (!passErr) {
    //                 alert("Request was send");
    //                 fetch("http://localhost:3031", {
    //                     method: "POST",
    //                     headers: {
    //                         "Content-Type": "application/json;charset=utf-8",
    //                     },
    //                     body: JSON.stringify({
    //                         login: login,
    //                         password: password1,
    //                         username: login,
    //                         email: email,
    //                     }),
    //                     credentials: "include",
    //                 })
    //                     .then((res) => res.json())
    //                     .then((response) => console.log(response))
    //                     .catch((err) => {
    //                         console.log(err);
    //                         alert(
    //                             "Sign up was failed! Pleasee try again later!"
    //                         );
    //                     });
    //             } else {
    //                 alert(passErr);
    //             }
    //         }
    //     } else {
    //         alert(emailErr);
    //     }
    // } else {
    //     alert(loginErr);
    // }
});
