import "./reset.css";
import "./layout.css";
import "./style.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import * as desktop from "./modules/desktop.js";

document.body.offsetHeight;
document.body.classList.add("enable-transitions");

const pages = import.meta.glob("./pages/*.html", { as: "raw", eager: true });
const windows = {
    "./pages/about.html": new desktop.Window(`<i class="bi bi-info-circle"></i> About`, pages["./pages/about.html"], undefined, undefined, undefined, false),
    "./pages/projects.html": new desktop.Window(`<i class="bi bi-kanban"></i> Projects`, pages["./pages/projects.html"], 800, 600),
}

document.querySelectorAll("[data-show]").forEach(button => {
    const query = button.getAttribute("data-show");
    const path = `./pages/${query}.html`;
    button.addEventListener("click", () => {
        windows[path].show();
    });
});