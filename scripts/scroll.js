
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carouselContainer');
    const leftButton = document.querySelector('.leftScroll');
    const rightButton = document.querySelector('.rightScroll');

    function getScrollAmount() {
        const card = document.querySelector('.carouselCard');
        if (!card) return 0;
        const cardStyle = window.getComputedStyle(card);
        const cardWidth = card.offsetWidth;
        const gap = parseInt(window.getComputedStyle(container).gap) || 40;
        
        // Calculate how many cards are visible
        const containerWidth = container.clientWidth;
        const cardsPerView = Math.floor(containerWidth / (cardWidth + gap));
        
        return (cardWidth + gap) * cardsPerView;
    }

    function updateScrollButtons() {
        const scrollLeft = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        //scroll button logic
        leftButton.style.display = container.scrollLeft > 0 ? 'flex' : 'none';
        rightButton.style.display = container.scrollLeft >= maxScroll - 1 ? 'none' : 'flex';
        // Fade effect logic
    //     fadeLeft.style.opacity = scrollLeft > 0 ? '1' : '0';
    //     fadeRight.style.opacity = scrollLeft < maxScroll - 1 ? '1' : '0';
    // 
    }

    leftButton.addEventListener('click', () => {
        const scrollAmount = getScrollAmount();
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
        // Update buttons immediately and after animation
        updateScrollButtons();
        setTimeout(updateScrollButtons, 300);
    });

    rightButton.addEventListener('click', () => {
        const scrollAmount = getScrollAmount();
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
        // Update buttons immediately and after animation
        updateScrollButtons();
        setTimeout(updateScrollButtons, 300);
    });

    // Update on scroll
    container.addEventListener('scroll', () => {
        requestAnimationFrame(updateScrollButtons);
    });

    // Initial state
    updateScrollButtons();
});