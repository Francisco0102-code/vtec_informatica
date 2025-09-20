const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const navLinks = nav.querySelectorAll("a"); // pega todos os links do menu

// Abrir/fechar menu ao clicar no botão
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Fechar menu ao clicar em qualquer link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
