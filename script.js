document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= -(window.innerHeight || document.documentElement.clientHeight) &&
            rect.left >= -(window.innerWidth || document.documentElement.clientWidth) &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
    }


    function animateElements() {
        elementsToAnimate.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
            } else if (!isInViewport(element) && element.classList.contains('animated')) {
                // Delay the removal of the 'animated' class by 500 milliseconds
                //setTimeout(() => {
                    element.classList.remove('animated');
                //}, 500);
            }
        });
    }
    

    window.addEventListener('scroll', animateElements);
    window.addEventListener('hashchange', function() {
        // Add a small delay to allow for scrolling to complete
        //setTimeout(animateElements, 200);
    });

    animateElements(); // Trigger on initial load for elements already in viewport
});