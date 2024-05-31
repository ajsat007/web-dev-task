
/* scripts.js */

document.addEventListener("DOMContentLoaded", function() {
    const scrollIndicator = document.querySelector(".scroll-indicator");
    scrollIndicator.addEventListener("click", function() {
        document.querySelector("#features").scrollIntoView({ behavior: "smooth" });
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
