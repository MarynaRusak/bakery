let mobileMenu = document.querySelector('.mobile-menu');
let menuBtnOpen = document.querySelector('.menu-btn-open');
let menuBtnClose = document.querySelector('.menu-btn-close');
let mobileLinks = document.querySelectorAll('.mobile-menu__link');

let toggleMenu = () => mobileMenu.classList.toggle('is-open');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

mobileLinks.forEach(link => {
  link.addEventListener('click', toggleMenu);
});
