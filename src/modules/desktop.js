const COMPACT = document.documentElement.clientWidth <= 450 ? true : false;
const START_X = COMPACT ? 0 : 50;
const START_Y = COMPACT ? 0 : 50;

const dock = document.getElementById("dock");

const windows = [];

// Reposition windows
window.addEventListener("resize", e => {
    windows.forEach(window => {
        const element = window.element;
        if (window.maximized) {
            animate(element, undefined, {
                top: 0,
                left: 0,
                width: document.documentElement.clientWidth + "px",
                height: document.documentElement.clientHeight + "px",
            }, 250);
        } else {
            const rect = element.getBoundingClientRect();
            let left = rect.left;
            let top = rect.top;
            if (left + rect.width > document.documentElement.clientWidth) {
                left = document.documentElement.clientWidth - rect.width;
            }
            if (top + rect.height > document.documentElement.clientHeight) {
                top = document.documentElement.clientHeight - rect.height;
            }
            top = Math.max(0, top);
            left = Math.max(0, left);
            animate(element, undefined, {
                top: top + "px",
                left: left + "px",
            }, 250);
        }
    });
});

// Maximize on double click
document.addEventListener("dblclick", e => {
    if (!e.target.closest(".window")) return;
    if (!e.target.classList.contains("title-bar")) return;
    if (e.button !== 0) return;
    const element = e.target.closest(".window");
    const window = windows.find(window => window.element == element);
    window.maximize();
});

// Window movement
document.addEventListener("pointerdown", e => {
    if (!e.target.closest(".window")) return;
    if (e.button !== 0) return;
    const element = e.target.closest(".window");
    const window = windows.find(window => window.element == element);
    // Bring window to front
    bringToFront(window);
    if (!e.target.classList.contains("title-bar")) return;
    if (window.maximized) return;
    document.addEventListener("pointermove", move);
    document.addEventListener("pointerup", release);
    // Set initial values
    const x = e.clientX;
    const y = e.clientY;
    const rect = element.getBoundingClientRect();
    function move(e) {
        e.preventDefault();
        // Calculate window position
        const dX = e.clientX - x;
        const dY = e.clientY - y;
        const top = rect.top + dY;
        const left = rect.left + dX;
        // Limit window position
        element.style.top = Math.min(document.documentElement.clientHeight - 50, Math.max(0, top)) + "px";
        element.style.left = Math.min(document.documentElement.clientWidth - 100, Math.max(0 - rect.width + 100, left)) + "px";
    }
    function release() {
        document.removeEventListener("pointermove", move);
        document.removeEventListener("pointerup", release);
    }
});

export class Window {
    #maximize;
    #close;
    #previous;

    constructor(title, html, w = COMPACT ? Math.min(400, document.documentElement.clientWidth) : 400, h = 300, resize = true, hidden = true) {
        this.element = document.createElement("div");
        this.element.classList.add("window");
        // Create title bar
        const titleBar = createElement("div", undefined, undefined, { class: "title-bar" });
        this.#maximize = createElement("button", `<i class="bi bi-arrows-angle-expand"></i>`, {
            click: () => {
                this.maximize();
            },
        });
        this.#close = createElement("button", `<i class="bi bi-x-lg"></i>`, {
            click: () => {
                this.hide();
            },
        });
        titleBar.append(createElement("p", title), this.#maximize, this.#close);
        // Create body
        const body = createElement("div", undefined, undefined, { class: "body" });
        html && (body.innerHTML = html);
        // Append title bar and body to window
        this.element.append(titleBar, body);
        // Initial position
        let x = START_X;
        let y = START_Y;
        // Prevent overlapping
        while (
            windows.some(window => {
                return window.element.style.top == y + "px" && window.element.style.left == x + "px";
            })
        ) {
            x += COMPACT ? 0 : 50;
            y += COMPACT ? 100 : 50;
        }
        // Set window position
        this.element.style.top = y + "px";
        this.element.style.left = x + "px";
        // Set window size
        COMPACT && (w = Math.min(w, document.documentElement.clientWidth));
        COMPACT && (h = Math.min(h, document.documentElement.clientHeight - y));
        this.element.style.width = w + "px";
        this.element.style.height = h + "px";
        // Append element
        document.body.append(this.element);
        windows.push(this);
        updateZIndex();
        this.open = !hidden;
        if (hidden) {
            this.element.style.opacity = 0;
            this.element.style.pointerEvents = "none";
        }
    }

    show() {
        if (!this.open) {
            this.open = true;
            animate(this.element, {
                opacity: 0,
                scale: 0.5,
                pointerEvents: "none",
            }, {
                opacity: 1,
                scale: 1,
                pointerEvents: "",
            }, 250);
            // Hide dock if windows is maximized
            if (this.maximized) {
                animate(dock, undefined, {
                    opacity: 0,
                    bottom: "-4.5rem",
                }, 250);
            }
        }
        bringToFront(this);
    }

    hide() {
        this.open = false;
        animate(this.element, undefined, {
            opacity: 0,
            scale: 0.5,
            pointerEvents: "none",
        }, 250);
        // Show dock
        animate(dock, undefined, {
            opacity: 1,
            bottom: 0,
        }, 250);
    }

    maximize() {
        if (!this.maximized) {
            this.#previous = this.element.getBoundingClientRect();
            this.maximized = true;
            animate(this.element, undefined, {
                top: 0,
                left: 0,
                width: document.documentElement.clientWidth + "px",
                height: document.documentElement.clientHeight + "px",
                borderRadius: 0,
                borderWidth: 0,
            }, 250);
            // Hide dock
            animate(dock, undefined, {
                opacity: 0,
                bottom: "-4.5rem",
            }, 250);
            this.#maximize.innerHTML = `<i class="bi bi-arrows-angle-contract"></i>`;
        } else {
            this.maximized = false;
            animate(this.element, undefined, {
                top: this.#previous.top + "px",
                left: this.#previous.left + "px",
                width: this.#previous.width + "px",
                height: this.#previous.height + "px",
                borderRadius: "",
                borderWidth: "",
            }, 250);
            // Show dock
            animate(dock, undefined, {
                opacity: 1,
                bottom: 0,
            }, 250);
            this.#maximize.innerHTML = `<i class="bi bi-arrows-angle-expand"></i>`;
        }
    }
}

export function animate(element, from, to, duration) {
    const animation = element.animate([
        from && from,
        to && to,
    ], {
        duration,
        easing: "cubic-bezier(0.65, 0, 0.35, 1)",
        fill: "forwards",
    });
    setTimeout(() => {
        animation.cancel();
        Object.assign(element.style, to);
    }, duration);
}

export function createElement(tag, html, events, attributes) {
    const element = document.createElement(tag);
    // Set inner HTML
    html && (element.innerHTML = html);
    // Add event listeners
    events && Object.entries(events).forEach(([event, listener]) => {
        element.addEventListener(event, listener);
    });
    // Assign attributes
    attributes && Object.entries(attributes).forEach(([attribute, value]) => {
        element.setAttribute(attribute, value);
    });
    return element;
}

function bringToFront(window) {
    if (windows.indexOf(window) != windows.length - 1) {
        windows.splice(windows.indexOf(window), 1);
        windows.push(window);
    }
    updateZIndex();
}

function updateZIndex() {
    for (let i = 0; i < windows.length; i++) {
        const element = windows[i].element;
        element.style.zIndex = i;
    }
}