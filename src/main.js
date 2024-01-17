import "./reset.css";
import "./layout.css";
import "./style.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import * as desktop from "./modules/desktop.js";

document.body.offsetHeight;
document.body.classList.add("enable-transitions");

const pages = import.meta.glob("./pages/*.html", { as: "raw", eager: true });
const windows = {
    "./pages/about.html": new desktop.Window(`<i class="bi bi-info-circle"></i> About`, pages["./pages/about.html"]),
    "./pages/projects.html": new desktop.Window(`<i class="bi bi-easel"></i> Projects`, pages["./pages/projects.html"], 800, 600),
}

// Create splash screen
const splash = document.createElement("div");
Object.assign(splash.style, {
    position: "absolute",
    inset: 0,
    backgroundColor: "var(--background-color)",
    zIndex: 10001,
});
document.body.append(splash);
// Fade out splash screen
desktop.animate(splash, undefined, {
    opacity: 0,
    display: "none",
}, 1000);

// Wait 1s and open about page
setTimeout(() => {
    windows["./pages/about.html"].show();
}, 1000);

document.querySelectorAll("[data-show]").forEach(button => {
    const query = button.getAttribute("data-show");
    const path = `./pages/${query}.html`;
    button.addEventListener("click", () => {
        windows[path].show();
    });
});