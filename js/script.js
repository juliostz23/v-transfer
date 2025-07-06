
// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('navbar-fixed');
    } else {
        navbar.classList.remove('navbar-fixed');
    }
});

// Mobile menu toggle
document.querySelector('.md\:hidden').addEventListener('click', function() {
    const mobileMenu = document.querySelector('.hidden.bg-gray-900.text-white.py-4.px-4');
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling
...
