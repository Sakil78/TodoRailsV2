document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const sidebar = document.querySelector(".sidebar");
    const sidebarToggle = document.querySelector(".sidebar-toggle");
    const searchButton = document.querySelector(".search-box");
    const darkModeSwitch = document.querySelector(".dark-mode-toggle-switch");
    const darkModeText = document.querySelector(".mode-text");

    if (sidebarToggle) {
        sidebarToggle.addEventListener("click", () => {
            sidebar.classList.toggle("close");
        });
    }

    if (searchButton) {
        searchButton.addEventListener("click", () => {
            sidebar.classList.remove("close");
        });
    }

    if (darkModeSwitch && darkModeText) {
        darkModeSwitch.addEventListener("click", () => {
            const isDark = body.classList.toggle("dark");
            darkModeText.innerText = isDark ? "Light Mode" : "Dark Mode";
        });
    }
});