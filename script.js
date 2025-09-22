// Menu mobile
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
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
