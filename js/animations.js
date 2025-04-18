import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typed from 'typed.js';

function initAnimations() {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize Typed.js for the role text
    const typeData = new Typed('.role', {
        strings: ["Frontend Developer", "Web Developer", "Student", "Backend Developer", "Coder"],
        loop: true,
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
    });
    
    // Home section animations
    gsap.from(".home-section-left", {
        scrollTrigger: {
            trigger: "#home",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: -50,
        duration: 1,
    });
    
    gsap.from(".home-section-right", {
        scrollTrigger: {
            trigger: "#home",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: 50,
        duration: 1,
    });
    
    // Skills section animations
    gsap.from(".skill-section-left", {
        scrollTrigger: {
            trigger: "#skill",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: -50,
        duration: 1,
    });
    
    gsap.from(".skill-section-right", {
        scrollTrigger: {
            trigger: "#skill",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: 50,
        duration: 1,
    });
    
    // Animate skill bars
    gsap.from(".skills", {
        scrollTrigger: {
            trigger: ".skill-bar",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        width: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power2.out",
    });
    
    // Animate skill logos
    gsap.from(".skill-logo-wrapper", {
        scrollTrigger: {
            trigger: ".skill-logo-container",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
    });
    
    // Education section animations - Timeline items
    gsap.from(".timeline-item", {
        scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: -30,
        duration: 0.8,
        stagger: 0.3,
    });
    
    // Project cards animation with staggered reveal
    gsap.from(".project-sec-box", {
        scrollTrigger: {
            trigger: "#project",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
    });
    
    // Contact section animation
    gsap.from(".contact-sec-left", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: -50,
        duration: 1,
    });
    
    gsap.from(".contact-sec-right", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: 50,
        duration: 1,
    });
    
    // Social links animation
    gsap.from(".social-links a", {
        scrollTrigger: {
            trigger: "footer",
            start: "top 90%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
    });
    
    // 3D Cube interaction
    const cube = document.getElementById('education-cube');
    const cubeWrapper = document.querySelector('.cube-wrapper');
    
    if (cube && cubeWrapper) {
        cubeWrapper.addEventListener('mousemove', (e) => {
            const cubeRect = cubeWrapper.getBoundingClientRect();
            const centerX = cubeRect.left + cubeRect.width / 2;
            const centerY = cubeRect.top + cubeRect.height / 2;
            
            // Calculate relative position from center (-1 to 1)
            const relativeX = (e.clientX - centerX) / (cubeRect.width / 2);
            const relativeY = (e.clientY - centerY) / (cubeRect.height / 2);
            
            // Apply rotation
            cube.style.transform = `rotateY(${relativeX * 20}deg) rotateX(${-relativeY * 20}deg)`;
        });
        
        cubeWrapper.addEventListener('mouseleave', () => {
            cube.style.transform = 'rotateY(2deg) rotateX(2deg)';
        });
    }
    
    // Update main.js to call this function
    window.initAnimations = initAnimations;
}

// Call initAnimations when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
});