document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor-follower');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');
    let mouseX = 0, mouseY = 0, dotX = 0, dotY = 0, ringX = 0, ringY = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    document.addEventListener('mouseout', () => {
        cursor.style.opacity = '0';
    });
    document.addEventListener('mouseover', () => {
        cursor.style.opacity = '1';
    });
    const clickables = document.querySelectorAll('a, button, .btn, .nav-items div, .skill-logo, .edu-sec-item, .card, input, textarea');
    clickables.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursorDot.style.opacity = '0';
            cursorRing.style.opacity = '0';
        });
        element.addEventListener('mouseleave', () => {
            cursorDot.style.opacity = '1';
            cursorRing.style.opacity = '1';
        });
    });
    const animate = () => {
        const dotEasing = 0.65;
        dotX += (mouseX - dotX) * dotEasing;
        dotY += (mouseY - dotY) * dotEasing;
        const ringEasing = 0.2920;
        ringX += (mouseX - ringX) * ringEasing;
        ringY += (mouseY - ringY) * ringEasing;
        cursorDot.style.left = `${dotX}px`;
        cursorDot.style.top = `${dotY}px`;
        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;
        requestAnimationFrame(animate);
    };
    animate();
    document.getElementById('current-year').textContent = new Date().getFullYear();
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('show');
    });
    const navbar = document.getElementById('navbar');
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleScroll);
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    function setActiveLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', setActiveLink);
    setActiveLink();
    const userImage = document.querySelector('.user-image');
    let isHovering = false;
    if (userImage) {
        userImage.addEventListener('mouseenter', () => {
            isHovering = true;
            userImage.style.transform = 'scale(1.05)';
        });
        userImage.addEventListener('mouseleave', () => {
            isHovering = false;
            userImage.style.transform = 'scale(1)';
        });
        document.addEventListener('mousemove', (e) => {
            if (isHovering) return;
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = clientX / innerWidth - 0.5;
            const y = clientY / innerHeight - 0.5;
            userImage.style.transform = `perspective(1000px) rotateY(${x * 15}deg) rotateX(${-y * 15}deg)`;
        });
    }
});
