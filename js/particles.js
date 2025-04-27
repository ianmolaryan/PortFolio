document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');

    let particles = [];
    let mouse = {
        x: 0,
        y: 0,
        radius: 150
    };

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    }

    function initParticles() {
        particles = [];
        const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 900), 350);
        for (let i = 0; i < numberOfParticles; i++) {
            const size = Math.random() * 2.59 + 0.1;
            const x = Math.random() * (canvas.width - size * 2);
            const y = Math.random() * (canvas.height - size * 2);
            const speedX = Math.random() * 0.25 - 0.25;
            const speedY = Math.random() * 0.25 - 0.25;
            const colors = [
                'rgba(241, 245, 244, 0.7)',
                'rgba(22, 216, 241, 0.7)',
                'rgba(36, 53, 56, 0.7)',
                'rgba(45, 212, 191, 0.7)',
                'rgba(20, 184, 166, 0.7)',
                'rgba(103, 232, 249, 0.7)',
                'rgba(6, 182, 212, 0.7)',
                'rgba(52, 243, 218, 0.7)',
                'rgba(14, 97, 87, 0.7)',
                'rgba(22, 216, 241, 0.7)',
                'rgba(22, 86, 97, 0.7)',
                'rgba(16, 241, 211, 0.7)',
            ];
            const color = colors[Math.floor(Math.random() * colors.length)];
            particles.push({ x, y, size, speedX, speedY, color });
        }
    }

    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 50) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(20, 184, 166, ${0.1 - distance / 1500})`;
                    ctx.lineWidth = 0.75;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.speedX;
            p.y += p.speedY;
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1.1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1.1;
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius) {
                const angle = Math.atan2(dy, dx);
                const force = (mouse.radius - distance) / mouse.radius;
                p.speedX += Math.cos(angle) * force * 0.071;
                p.speedY += Math.sin(angle) * force * 0.071;
                const speed = Math.sqrt(p.speedX * p.speedX + p.speedY * p.speedY);
                if (speed > 1.5) {
                    p.speedX = (p.speedX / speed) * 1;
                    p.speedY = (p.speedY / speed) * 1;
                }
            }
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        }
        connectParticles();
        requestAnimationFrame(animate);
    }

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();
    animate();
});
