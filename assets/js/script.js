const toggleTheme = document.getElementById("toggle-theme");
const rootHtml = document.documentElement;

function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");
    if (currentTheme === "light") rootHtml.setAttribute("data-theme", "dark");
    else rootHtml.setAttribute("data-theme", "light");

    toggleTheme.classList.toggle("bi-moon-stars");
    toggleTheme.classList.toggle("bi-sun");
}

toggleTheme.addEventListener("click", changeTheme);
