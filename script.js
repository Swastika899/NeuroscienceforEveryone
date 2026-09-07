const THEME_KEY = "theme";
const root = document.documentElement;

function applyTheme(theme) {
    root.toggleAttribute("data-theme", theme === "dark");
}

function getPreferredTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);

    if (savedTheme === "dark" || savedTheme === "light") {
        return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

function toggleTheme() {
    const currentTheme = getPreferredTheme();
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    applyTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
}

applyTheme(getPreferredTheme());
