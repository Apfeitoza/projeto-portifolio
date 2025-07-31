const toggleTheme = document.getElementById("toggle-theme");
const rootHtml = document.documentElement;
const menuLinks = document.querySelectorAll('.menu__link');

//Função para alterar a aparência de um link ativo
menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    
    menuLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});

//Função para alterar a aparencia do tema 
function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");
    if (currentTheme === "light") rootHtml.setAttribute("data-theme", "dark");
    else rootHtml.setAttribute("data-theme", "light");

    toggleTheme.classList.toggle("bi-moon-stars");
    toggleTheme.classList.toggle("bi-sun");
}

toggleTheme.addEventListener("click", changeTheme);

