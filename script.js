document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a'); // Select all anchor links within the nav

    hamburger.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Check if the navigation is currently active (open)
            if (mainNav.classList.contains('active')) {
                // Close the navigation by removing the 'active' class
                mainNav.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // (Optional) Close the menu if the user clicks outside (for touch devices)
    document.addEventListener('touchstart', (event) => {
        const targetElement = event.target;
        const isNavOpen = mainNav.classList.contains('active');
        const isHamburgerClicked = targetElement === hamburger || hamburger.contains(targetElement);
        const isNavClicked = targetElement === mainNav || mainNav.contains(targetElement);

        if (isNavOpen && !isHamburgerClicked && !isNavClicked) {
            mainNav.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});
