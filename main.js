const MenuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.header');

MenuIcon.addEventListener('click', () => {
    navbar.classList.toggle('open');
    
});