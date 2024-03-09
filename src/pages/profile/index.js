import { NetAPI } from "/net.js";
import { state } from "/root.js";
import { usePageRender } from "/hooks.js";

const pageId = "/profile";

const profileRequest = new NetAPI("/profile", "GET");

const linkArr = document.querySelectorAll(".header_links");
linkArr.forEach((link) => {
    link.addEventListener("click", (event) => event.preventDefault());
});

usePageRender(state[pageId], () => {
    profileRequest
        .send()
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
            alert("Profile info loading was failed! Please try again later!");
        });
});
