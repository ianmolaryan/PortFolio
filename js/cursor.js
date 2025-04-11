document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor-follower');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');
    
    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;
    
    // Update mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Hide cursor when mouse leaves window
    document.addEventListener('mouseout', () => {
        cursor.style.opacity = '0';
    });
    
    document.addEventListener('mouseover', () => {
        cursor.style.opacity = '1';
    });
    
    // Expand cursor on clickable elements
    const clickables = document.querySelectorAll('a, button, .btn, .nav-items div, .skill-logo, .edu-sec-item, .card, input, textarea');
    
    clickables.forEach(element => 
        {
            element.addEventListener('mouseenter', () => 
            {
            cursorDot.style.opacity = '0';
            cursorRing.style.opacity = '0';
        });
        
        element.addEventListener('mouseleave', () => {
            cursorDot.style.opacity = '1';
            cursorRing.style.opacity = '1';
        });
    });
    
    // Animate cursor with smooth follow
    const animate = () => {
        // Smooth follow for dot (faster)
        const dotEasing = 0.5;
        dotX += (mouseX - dotX) * dotEasing;
        dotY += (mouseY - dotY) * dotEasing;
        
        // Smooth follow for ring (slower)
        const ringEasing = 0.320;
        ringX += (mouseX - ringX) * ringEasing;
        ringY += (mouseY - ringY) * ringEasing;
        
        // Apply positions
        cursorDot.style.left = `${dotX}px`;
        cursorDot.style.top = `${dotY}px`;
        
        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;
        
        requestAnimationFrame(animate);
    };
    
    animate();
});