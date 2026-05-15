document.addEventListener('DOMContentLoaded', function() {
    // Function to handle navigation menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Function to handle smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Example of dynamic content loading
    const loadContentButton = document.getElementById('load-content');
    loadContentButton.addEventListener('click', function() {
        const contentArea = document.getElementById('content-area');
        contentArea.innerHTML = '<p>This is dynamically loaded content!</p>';
    });
});