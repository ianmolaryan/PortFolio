document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('show');
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    
    // Active navigation link
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
    
    // Call setActiveLink on page load
    setActiveLink();
    
    // Handle image parallax effect
    const userImage = document.querySelector('.user-image');
    let isHovering = false;
    
   
    if (userImage) {
        // Detect hover
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
    
            // Combine hover pop + rotation
            userImage.style.transform = `perspective(1000px) rotateY(${x * 15}deg) rotateX(${-y * 15}deg) `;
        });
    }
    
});