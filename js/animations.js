import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typed from 'typed.js';

function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    new Typed('.role', {
        strings: ["Frontend Developer", "Web Developer", "Student", "Backend Developer", "Coder"],
        loop: true,
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
    });

    gsap.from(".home-section-left", {
        scrollTrigger: { trigger: "#home", start: "top 80%", toggleActions: "play none none none" },
        opacity: 0, x: -50, duration: 1,
    });

    gsap.from(".home-section-right", {
        scrollTrigger: { trigger: "#home", start: "top 80%", toggleActions: "play none none none" },
        opacity: 0, x: 50, duration: 1,
    });

    gsap.from(".skill-section-left", {
        scrollTrigger: { trigger: "#skill", start: "top 80%", toggleActions: "play none none none" },
        opacity: 0, x: -50, duration: 1,
    });

    gsap.from(".skill-section-right", {
        scrollTrigger: { trigger: "#skill", start: "top 80%", toggleActions: "play none none none" },
        opacity: 0, x: 50, duration: 1,
    });

    gsap.from(".skills", {
        scrollTrigger: { trigger: ".skill-bar", start: "top 80%", toggleActions: "play none none none" },
        width: 0, duration: 1.5, stagger: 0.2, ease: "power2.out",
    });

    gsap.from(".skill-logo-wrapper", {
        scrollTrigger: { trigger: ".skill-logo-container", start: "top 80%", toggleActions: "play none none none" },
        opacity: 0, y: 20, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)",
    });

    gsap.from(".timeline-item", {
        scrollTrigger: { trigger: ".timeline-container", start: "top 80%", toggleActions: "play none none none" },
        opacity: 0, x: -30, duration: 0.8, stagger: 0.3,
    });

    gsap.from(".project-sec-box", {
        scrollTrigger: { trigger: "#project", start: "top 80%", toggleActions: "play none none none" },
        opacity: 0, y: 50, duration: 1, stagger: 0.2,
    });

    gsap.from(".contact-sec-left", {
        scrollTrigger: { trigger: "#contact", start: "top 80%", toggleActions: "play none none none" },
        opacity: 0, x: -50, duration: 1,
    });

    gsap.from(".contact-sec-right", {
        scrollTrigger: { trigger: "#contact", start: "top 80%", toggleActions: "play none none none" },
        opacity: 0, x: 50, duration: 1,
    });

    gsap.from(".social-links a", {
        scrollTrigger: { trigger: "footer", start: "top 90%", toggleActions: "play none none none" },
        opacity: 0, y: 20, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)",
    });

    const cube = document.getElementById('education-cube');
    const cubeWrapper = document.querySelector('.cube-wrapper');

    if (cube && cubeWrapper) {
        cubeWrapper.addEventListener('mousemove', (e) => {
            const rect = cubeWrapper.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const relativeX = (e.clientX - centerX) / (rect.width / 2);
            const relativeY = (e.clientY - centerY) / (rect.height / 2);
            cube.style.transform = `rotateY(${relativeX * 20}deg) rotateX(${-relativeY * 20}deg)`;
        });
        cubeWrapper.addEventListener('mouseleave', () => {
            cube.style.transform = 'rotateY(2deg) rotateX(2deg)';
        });
    }

    window.initAnimations = initAnimations;
}

document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
});
