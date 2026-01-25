// global gsap, ScrollTrigger, Typed

function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    if (document.querySelector('.role')) {
        new Typed('.role', {
            strings: ["Frontend Developer", "Web Developer", "Student", "Backend Developer", "Coder"],
            loop: true,
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1000,
        });
    }

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

    // 3D Cube Rotation on Scroll
    const cube = document.getElementById('education-cube');
    const cubeWrapper = document.querySelector('.cube-wrapper');

    if (cube && cubeWrapper) {
        // Implement rotation on scroll
        gsap.to(cube, {
            scrollTrigger: {
                trigger: cubeWrapper,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
            rotateY: 360,
            rotateX: 360,
            ease: "none"
        });
        
        // Removed mouse interaction to avoid conflict with scroll rotation
    }

    window.initAnimations = initAnimations;
}

document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
});
