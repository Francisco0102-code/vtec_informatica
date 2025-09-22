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




// Função para detectar se elemento está visível
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight - 100;
}

// Ativar animações ao scroll
function handleScroll() {
  document.querySelectorAll(".fade-up, .fade-left, .fade-right, #servicos .section-title")
    .forEach(el => {
      if (isInViewport(el)) {
        el.classList.add("visible");
      }
    });
}
document.addEventListener("scroll", handleScroll);
document.addEventListener("DOMContentLoaded", handleScroll);
