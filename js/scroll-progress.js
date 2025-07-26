document.addEventListener('DOMContentLoaded', function() {
    const scrollBar = document.querySelector('.scroll-bar');
    function updateScrollProgress() {
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        scrollBar.style.width = `${progress}%`;
    }
    window.addEventListener('scroll', updateScrollProgress);
    window.addEventListener('resize', updateScrollProgress);
    updateScrollProgress();
});
