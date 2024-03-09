const SIGN_IN_COOKIE_NAME = "session_id";
const loginRequirePages = new Set(["home", "profile"]);
const redirect = "/login";

const root = document.querySelector("#root");
export const state = {};

export function render(path) {
    Object.values(state).forEach((page) => {
        page.element.style.display = "none";
        page.isRendered = false;
    })

    if (!state[path]) {
        root.textContent = "This page does not exist!";
    } else if (state[path].loginRequire && !checkCookieLogin()) {
        state[redirect].element.style.display = "";
        state[redirect].isRendered = true;
        window.history.pushState({}, "", redirect);
    } else {
        state[path].element.style.display = "";
        state[path].isRendered = true;
        window.history.pushState({}, "", path);
    }
    console.log(state);
}

function stateInit() {
    for (const child of root.children) {
        const page = {
            element: child,
            id: child.id,
            loginRequire: false,
            isRendered: false,
        };
        if (loginRequirePages.has(child.id)) {
            page.loginRequire = true;
        }
        if (child.id === "home") {
            state["/"] = page;
        }
        state["/" + child.id] = page;
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

stateInit();
render(window.location.pathname);
console.log(checkCookieLogin());

document.addEventListener("click", (event) => {
    const closeLink = event.target.closest(".link");
    if (!closeLink) return;
    const newPath = closeLink.dataset.to;

    render(newPath);
});

// console.log(state);
