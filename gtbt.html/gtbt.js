
document.addEventListener('scroll', function() {
    const ctaButton = document.querySelector('.cta-button');
    const heroContent = document.querySelector('.hero-content');
    const heroBottom = heroContent.getBoundingClientRect().bottom;

    if (heroBottom < window.innerHeight) {
        ctaButton.style.transform = 'translateY(20px)';
        ctaButton.style.opacity = '0';
    } else {
        ctaButton.style.transform = 'translateY(0)';
        ctaButton.style.opacity = '1';
    }
});
