// let modal = document.querySelector('.backdrop');
// let modalBtnOpen = document.querySelector('.modal-btn-open');
// let modalBtnClose = document.querySelector('.modal-btn-close');

// let toggleModal = () => modal.classList.toggle('is-hidden');

// modalBtnOpen.addEventListener('click', toggleModal);
// modalBtnClose.addEventListener('click', toggleModal);

let modal = document.querySelector('.backdrop');
let modalBtnOpenHeader = document.querySelector(
  '.header__button.modal-btn-open',
);
let modalBtnOpenHero = document.querySelector(
  '.hero-section__button.modal-btn-open',
);
let modalBtnClose = document.querySelector('.modal-btn-close');

let toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpenHeader.addEventListener('click', toggleModal);
modalBtnOpenHero.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
