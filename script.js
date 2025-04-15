document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('nav');

    hamburger.addEventListener('click', (event) => {
        mainNav.classList.toggle('active');
        hamburger.classList.toggle('active');
        event.stopPropagation(); // Prevent click on hamburger from immediately closing the menu
    });

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
