import { NetAPI } from "/net.js";

const profileRequest = new NetAPI("/profile", "GET");

const linkArr = document.querySelectorAll(".header_links");
linkArr.forEach((link) => {
    link.addEventListener("click", (event) => event.preventDefault());
});

setTimeout(() => {
    profileRequest
        .send()
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
            alert("Profile info loading was failed! Please try again later!");
        });
}, 2000);
