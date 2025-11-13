// Main JavaScript file for the portfolio website

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initGlossyDots();
    initHeroAnimation();
    initMobileMenu();
    initSmoothScrolling();
    initScrollReveal();
});

/**
 * Initialize the hero section animation
 */
function initHeroAnimation() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;

    // Set canvas to full size of its container
    const resizeCanvas = () => {
        const container = canvas.parentElement;
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
    };

    // Initial resize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Simple particle animation
    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = window.innerWidth < 768 ? 30 : 50;

    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.opacity = Math.random() * 0.5 + 0.1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Bounce off edges
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        for (const particle of particles) {
            particle.update();
            particle.draw();
        }
        
        // Draw connecting lines
        for (let i = 0; i < particles.length; i++) {
            for (let j = i; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 150})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
}

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-button';
    menuButton.innerHTML = '☰';
    menuButton.setAttribute('aria-label', 'Menu');
    
    const nav = document.querySelector('.navbar-glassy');
    const navLinks = document.querySelector('.nav-links');
    
    if (!nav || !navLinks) return;
    
    // Add mobile menu button
    nav.appendChild(menuButton);
    
    // Toggle mobile menu
    menuButton.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        menuButton.textContent = navLinks.style.display === 'flex' ? '✕' : '☰';
    });
    
    // Handle window resize
    function handleResize() {
        if (window.innerWidth > 768) {
            navLinks.style.display = '';
            menuButton.style.display = 'none';
        } else {
            navLinks.style.display = 'none';
            menuButton.style.display = 'block';
        }
    }
    
    // Initial check
    handleResize();
    window.addEventListener('resize', handleResize);
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Account for fixed header
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                const menuButton = document.querySelector('.mobile-menu-button');
                if (window.innerWidth <= 768 && navLinks && menuButton) {
                    navLinks.style.display = 'none';
                    menuButton.textContent = '☰';
                }
            }
        });
    });
}

/**
 * Initialize scroll reveal animations
 */
function initScrollReveal() {
    // Simple scroll reveal for sections
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
    
    // Add styles for scroll reveal
    const style = document.createElement('style');
    style.textContent = `
        .section.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

/**
 * Helper function to check if an element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Initialize glossy dots background effect
 */
function initGlossyDots() {
    const container = document.getElementById('glossyDots');
    if (!container) return;

    // Number of dots to generate
    const dotCount = 30; // Augmenté le nombre de points pour un meilleur effet
    
    // Possible colors for the dots (blue/purple gradients)
    const colors = [
        'rgba(99, 102, 241, 0.8)',  // indigo-500
        'rgba(124, 58, 237, 0.8)',  // violet-600
        'rgba(139, 92, 246, 0.8)',  // violet-500
        'rgba(168, 85, 247, 0.8)'   // violet-500 (lighter)
    ];

    // Create dots
    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        
        // Random size between 200px and 500px
        const size = Math.random() * 300 + 200; // Tailles plus grandes pour une meilleure visibilité
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random animation
        const duration = Math.random() * 20 + 20; // between 20s and 40s
        const delay = Math.random() * -20; // so animations start at different times
        
        // Random color
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Apply styles
        dot.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, ${color} 0%, transparent 70%);
            border-radius: 50%;
            left: ${posX}%;
            top: ${posY}%;
            transform: translate(-50%, -50%);
            filter: blur(20px);
            opacity: 0.6; // Opacité augmentée
            animation: float ${duration}s ease-in-out ${delay}s infinite;
            will-change: transform, opacity;
        `;
        
        container.appendChild(dot);
    }
    
    console.log('Glossy dots initialized');
}
