const menuButton = document.querySelector('.menu__btn');
const menu = document.querySelector('.navbar');
const closeMenuButton = document.querySelector('.close__btn');
const toggleMenu = (event) => {
    menu.classList.toggle('is__open');
};


menuButton.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click', toggleMenu);