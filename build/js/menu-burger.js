let burger = document.querySelector('.header__menu-btn');
let btnClose = document.querySelector('.navigation__btn-close');
let navigation = document.querySelector('.navigation');


burger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);

function openMenu() {
    navigation.classList.add('show-content');
};

function closeMenu() {
    navigation.classList.remove('show-content');
};
