// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuToggle.addEventListener('click', function() {
        mobileMenuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('mobile-menu-active');
    });

    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-menu ul li a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('mobile-menu-active');
        });
    });

    // Current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
