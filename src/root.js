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
    // console.log(child.querySelector('script'))
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

console.log(state);
