import { NetAPI } from "/net.js";
import { state, checkCookieLogin } from "/root.js";
import { usePageRender } from "/hooks.js";
import { renderPosts } from "/components/post/index.js";

const pageId = "/profile";

const profileRequest = new NetAPI("/profile", "GET");

const linkArr = document.querySelectorAll(".header_links");
linkArr.forEach((link) => {
    link.addEventListener("click", (event) => event.preventDefault());
});

const loginLogout = document.getElementById('login-link').querySelector('a')

usePageRender(state[pageId], () => {
    profileRequest
        .send()
        .then((res) => {
            renderPosts({ posts: Object.values(res.result) });
        })
        .catch((err) => {
            console.log(err);
            alert("Profile info loading was failed! Please try again later!");
        });
        if (!checkCookieLogin()){
            loginLogout.textContent = 'Вход';
        }
});
