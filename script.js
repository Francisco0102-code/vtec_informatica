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

document.addEventListener('click', (e) => {
  if (
    !nav.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    nav.classList.remove('active');
  }
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
// DESTAQUE NOS CARDS COM DESFOQUE SUAVE
// ==============================
const servicosCards = document.querySelectorAll('#servicos .card');

servicosCards.forEach(card => {
  // Click: apenas um ativo por vez
  card.addEventListener('click', (e) => {
    servicosCards.forEach(c => c.classList.remove('ativo', 'blur'));
    card.classList.add('ativo');
    servicosCards.forEach(c => {
      if (c !== card) c.classList.add('blur');
    });
    e.stopPropagation();
  });

  // Hover: desfoca os outros cards temporariamente
  card.addEventListener('mouseenter', () => {
    servicosCards.forEach(c => {
      if (c !== card) c.classList.add('blur');
    });
  });
  card.addEventListener('mouseleave', () => {
    servicosCards.forEach(c => c.classList.remove('blur'));
  });
});

// Click fora remove destaque e desfoque
document.body.addEventListener('click', () => {
  servicosCards.forEach(c => c.classList.remove('ativo', 'blur'));
});


document.querySelectorAll(".fade-up, .fade-left, .fade-right, #servicos .section-title")
.forEach(el => {
  // Se o elemento já está visível, adiciona a classe imediatamente
  const rect = el.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    el.classList.add("visible");
  } else {
    observer.observe(el);
  }
});

const header = document.querySelector('.header');
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  if (window.scrollY > hero.offsetHeight - 70) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Quando o usuário rolar a página
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


/*
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark'); // adiciona ou remove a classe dark

  if(body.classList.contains('dark')){
    darkModeToggle.textContent = '☀️ Modo Claro';
  } else {
    darkModeToggle.textContent = '🌙 Modo Escuro';
  }
});
*/


