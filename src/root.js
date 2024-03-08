const root = document.querySelector("#root");
const state = {};

function render(path) {
    Array.from(root.children).forEach(
        (child) => (child.style.display = "none")
    );
    if (!state[path]) {
        root.textContent = "This page does not exist!";
    } else {
        state[path].style.display = "";
    }
}

for (const child of root.children) {
    if (child.id === "home") {
        state["/"] = child;
    }
    state["/" + child.id] = child;
}

render(window.location.pathname);

document.addEventListener("click", (event) => {
    const closeLink = event.target.closest(".link");
    if (!closeLink) return;
    const newPath = closeLink.dataset.to;

    render(newPath);
    window.history.pushState({}, "", newPath);
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

// console.log(state);
