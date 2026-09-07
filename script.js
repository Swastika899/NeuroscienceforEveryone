const THEME_KEY = "theme";
const root = document.documentElement;

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

// Apply saved theme when the page loads
const savedTheme = localStorage.getItem(THEME_KEY);

if (savedTheme === "dark" || savedTheme === "light") {
    applyTheme(savedTheme);
} else {
    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    applyTheme(prefersDark ? "dark" : "light");
}
