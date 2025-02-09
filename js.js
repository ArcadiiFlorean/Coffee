//Initialize Swiper

const swiper = new Swiper(".slider-wrapper", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
9;

//nav_button
// Selectează butonul și meniul
const menuButton = document.querySelector(".menu_open_button");
const navMenu = document.querySelector(".nav_menu");

// Verifică dacă elementele au fost selectate corect
if (menuButton && navMenu) {
  // Adaugă un eveniment de clic pe butonul de meniu
  menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show"); // Adaugă sau îndepărtează clasa 'show'
  });
} else {
  console.error("Elementele nu au fost găsite.");
}

//hover for menu_open_button
function toggleButtonEffect() {
  const button = document.querySelector(".menu_open_button");

  // Adaugă sau elimină clasa care controlează efectul de hover
  button.classList.toggle("active");
}
