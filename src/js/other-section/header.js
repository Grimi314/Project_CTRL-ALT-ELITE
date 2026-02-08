const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu .mobile-menu-close-btn');

const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');

// Open mobile menu
burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
    document.body.classList.add('mobile-menu-open');
});

// Close mobile menu
mobileMenuCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('mobile-menu-open');
});

// Close mobile menu when clicking on a menu item
mobileMenuItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        document.body.classList.remove('mobile-menu-open');
    });
});
