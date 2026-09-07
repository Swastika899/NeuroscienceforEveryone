const THEME_KEY = "theme";
const root = document.documentElement;
const themeButton = document.getElementById("theme-toggle");

function applyTheme(theme) {
    if (theme === "dark") {
        root.setAttribute("data-theme", "dark");
    } else {
        root.removeAttribute("data-theme");
    }
}

function toggleTheme() {
    const currentTheme =
        root.getAttribute("data-theme") === "dark"
            ? "dark"
            : "light";

    const newTheme =
        currentTheme === "dark" ? "light" : "dark";

    applyTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
}

themeButton.addEventListener("click", toggleTheme);

// Initial theme
const savedTheme = localStorage.getItem(THEME_KEY);

if (savedTheme) {
    applyTheme(savedTheme);
} else {
    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    applyTheme(prefersDark ? "dark" : "light");
}
