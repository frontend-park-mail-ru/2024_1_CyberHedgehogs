const SIGN_IN_COOKIE_NAME = "session_id";
const loginRequirePages = new Set(["home", "profile"]);
const redirect = "/login";

const root = document.querySelector("#root");
const state = {};

function render(path) {
    Array.from(root.children).forEach(
        (child) => (child.style.display = "none")
    );

    if (!state[path]) {
        root.textContent = "This page does not exist!";
    } else if (state[path].loginRequire && !checkCookieLogin()) {
        state[redirect].element.style.display = "";
        window.history.pushState({}, "", redirect);
    } else {
        state[path].element.style.display = "";
        window.history.pushState({}, "", path);
    }
}

function checkCookieLogin() {
    const cookieDict = {};
    const cookies = document.cookie
        .split(";")
        .map((cookie) => cookie.trim().split("="));
    for (const pair of cookies) {
        cookieDict[pair[0]] = pair[1];
    }
    return SIGN_IN_COOKIE_NAME in cookieDict;
}

for (const child of root.children) {
    const page = {
        element: child,
        id: child.id,
        loginRequire: false,
    };
    if (loginRequirePages.has(child.id)) {
        page.loginRequire = true;
    }
    if (child.id === "home") {
        state["/"] = page;
    }
    state["/" + child.id] = page;
}

render(window.location.pathname);
console.log(checkCookieLogin());

document.addEventListener("click", (event) => {
    const closeLink = event.target.closest(".link");
    if (!closeLink) return;
    const newPath = closeLink.dataset.to;

    render(newPath);
});

setInterval(() => {
    const cookieDict = {};
    const cookies = document.cookie
        .split(";")
        .map((cookie) => cookie.trim().split("="));
    for (const pair of cookies) {
        cookieDict[pair[0]] = pair[1];
    }
    if (cookieDict["session_id"]) {
        console.log("ok");
    }
}, 10000);

console.log(state);
