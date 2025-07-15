// -------------------- toggle menu  -----------------------------------
document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menu-btn");
    const menu = document.querySelector("header ul");

    if (menuBtn && menu) {
        menuBtn.addEventListener("click", function () {
            menu.classList.toggle("show");
        });
    }
    
    const links = menu.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("show");
    });
}
);

});

// ---------------- transparencia header --------------------------------------
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Rolando para baixo → esconde
        header.style.transform = 'translateY(-100%)';
    } else {
        // Rolando para cima → mostra
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos
});

// ---------------------- Swiper ----------------------
document.addEventListener("DOMContentLoaded", function () {
  if (typeof Swiper !== "undefined") {
    new Swiper(".swiper", {
        loop: true,
        slidesPerView: 1, // <------ ESSENCIAL
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        grabCursor: true,
        });

  }
});

// ---------------------- Back to Top ----------------------

const btt = document.getElementById('backToTop');

if (btt) {
  // Ao clicar, sobe suavemente e ativa animação
  btt.addEventListener('click', () => {
    btt.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Ao rolar, ajusta opacidade
  window.addEventListener('scroll', () => {
    btt.style.opacity = window.scrollY > 0 ? '0.3' : '1';
  });
}