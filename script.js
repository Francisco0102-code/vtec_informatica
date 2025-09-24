// ==============================
// MENU MOBILE
// ==============================
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const navLinks = nav.querySelectorAll("a");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

// ==============================
// ANIMAÇÕES AO ROLAR (IntersectionObserver)
// ==============================
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target); // anima uma vez só
    }
  });
}, {
  threshold: 0.2 // 20% do elemento visível já ativa
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".fade-up, .fade-left, .fade-right, #servicos .section-title")
    .forEach(el => observer.observe(el));
});

// ==============================
// MODAL DE IMAGEM COM FUNDO DESFOCADO
// ==============================

// Seleciona as imagens (pode ajustar o seletor conforme sua página)
const galleryImages = document.querySelectorAll(".grid-gallery img, .card img");

// Cria modal dinamicamente se não existir
let imageModal = document.getElementById("imageModal");
if (!imageModal) {
  imageModal = document.createElement("div");
  imageModal.id = "imageModal";
  imageModal.className = "image-modal";
  imageModal.innerHTML = `
    <span id="closeModal" class="close">&times;</span>
    <img class="modal-content" id="modalImage" alt="">
  `;
  document.body.appendChild(imageModal);
}

const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

// Evento para abrir modal
galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    imageModal.style.display = "flex";
    modalImage.src = img.src;
    modalImage.alt = img.alt;
  });
});

// Evento para fechar modal
closeModal.addEventListener("click", () => {
  imageModal.style.display = "none";
});

// Fecha ao clicar fora da imagem
imageModal.addEventListener("click", (e) => {
  if (e.target === imageModal) {
    imageModal.style.display = "none";
  }
});

// ==============================
// SAUDAÇÃO PERSONALIZADA COM LOCALSTORAGE
// ==============================
const welcomeMessage = document.getElementById("welcomeMessage");

if (welcomeMessage) {
  let userName = localStorage.getItem("userName");

  if (!userName) {
    userName = prompt("Digite seu nome para personalizar sua visita:");
    if (userName && userName.trim() !== "") {
      localStorage.setItem("userName", userName);
    }
  }

  if (userName && userName.trim() !== "") {
    welcomeMessage.textContent = `Seja bem-vindo(a), ${userName}!`;
  } else {
    welcomeMessage.textContent = "Seja bem-vindo(a)!";
  }
}
