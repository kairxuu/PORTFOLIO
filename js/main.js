// Main JavaScript file for the portfolio website

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initGlossyDots();
    initHeroAnimation();
    initNavigation(); // Initialisation de la navigation
    initSmoothScrolling();
    initScrollReveal();
    
    // Mettre à jour le lien actif après un court délai pour s'assurer que le DOM est prêt
    setTimeout(updateActiveLink, 100);
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
 * ===========================================
 * GESTION DE LA NAVIGATION
 * - Menu mobile avec animation fluide
 * - Navigation au clavier
 * - Gestion des états accessibles
 * - Fermeture automatique au redimensionnement
 * ===========================================
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialisation de la navigation
    initNavigation();
    
    // Mise à jour du lien actif au chargement
    updateActiveLink();
    
    // Écouteur pour les changements d'URL (pour les SPA ou chargements dynamiques)
    window.addEventListener('popstate', updateActiveLink);
});

/**
 * Initialise la navigation principale
 */
function initNavigation() {
    const menuButton = document.getElementById('mobile-menu-button');
    const navContainer = document.querySelector('.nav-container');
    const navOverlay = document.getElementById('nav-overlay');
    
    // Fonction pour vérifier et mettre à jour l'état mobile
    const updateMobileState = () => {
        const isMobile = window.innerWidth <= 991;
        
        // Mettre à jour l'affichage du bouton menu
        if (menuButton) {
            menuButton.style.display = isMobile ? 'flex' : 'none';
        }
        
        // Si on passe en mode desktop, fermer le menu
        if (!isMobile && navContainer && navContainer.getAttribute('aria-expanded') === 'true') {
            toggleMenu(false);
        }
        
        return isMobile;
    };
    
    // Vérifier l'état initial
    let isMobile = updateMobileState();
    
    // Mettre à jour lors du redimensionnement
    window.addEventListener('resize', () => {
        isMobile = updateMobileState();
    });
    
    if (!menuButton || !navContainer) {
        console.warn('Éléments de navigation non trouvés');
        return;
    }
    
    // Récupérer tous les liens de navigation
    const navLinks = navContainer.querySelectorAll('.nav-link');
    const firstNavItem = navLinks[0];
    const lastNavItem = navLinks[navLinks.length - 1];
    
    // Fonction pour ouvrir/fermer le menu
    const toggleMenu = (open = null) => {
        // Ne rien faire si on est sur desktop
        if (!isMobile) return;
        
        const isOpen = open !== null ? open : menuButton.getAttribute('aria-expanded') === 'false';
        
        console.log(`Toggle menu: ${isOpen}`);
        
        // Mettre à jour l'état du bouton
        menuButton.setAttribute('aria-expanded', isOpen);
        document.body.classList.toggle('menu-open', isOpen);
        
        // Basculer les classes pour l'animation
        if (isOpen) {
            navContainer.setAttribute('aria-expanded', 'true');
            if (navOverlay) {
                navOverlay.style.display = 'block';
                setTimeout(() => navOverlay.classList.add('visible'), 10);
            }
            
            // Déplacer le focus vers le premier élément du menu
            setTimeout(() => {
                if (firstNavItem) firstNavItem.focus();
            }, 100);
        } else {
            navContainer.setAttribute('aria-expanded', 'false');
            if (navOverlay) {
                navOverlay.classList.remove('visible');
                setTimeout(() => {
                    if (navOverlay.classList.contains('visible') === false) {
                        navOverlay.style.display = 'none';
                    }
                }, 300);
            }
            
            // Replacer le focus sur le bouton menu
            menuButton.focus();
        }
    };
    
    // Gestion du clic sur le bouton menu
    menuButton.addEventListener('click', (e) => {
        if (isMobile) {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        }
    });
    
    // Gestion du clic sur l'overlay
    if (navOverlay) {
        navOverlay.addEventListener('click', () => {
            if (isMobile) toggleMenu(false);
        });
    }
    
    // Fermer le menu en cliquant sur un lien (mobile uniquement)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMobile) toggleMenu(false);
        });
    });
    
    // Navigation au clavier
    const handleKeyboardNavigation = (e) => {
        // Échap pour fermer le menu
        if (e.key === 'Escape') {
            e.preventDefault();
            toggleMenu(false);
            return;
        }
        
        // Tabulation et flèches pour la navigation
        if (e.key === 'Tab') {
            // Si on est sur le dernier élément et qu'on appuie sur Tab, boucler au début
            if (e.shiftKey && document.activeElement === firstNavItem) {
                e.preventDefault();
                lastNavItem.focus();
            } 
            // Si on est sur le premier élément et qu'on appuie sur Maj+Tab, aller à la fin
            else if (!e.shiftKey && document.activeElement === lastNavItem) {
                e.preventDefault();
                firstNavItem.focus();
            }
        }
        
        // Navigation avec les flèches haut/bas
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault();
            const currentIndex = Array.from(navLinks).indexOf(document.activeElement);
            const nextIndex = (currentIndex + 1) % navLinks.length;
            navLinks[nextIndex].focus();
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            const currentIndex = Array.from(navLinks).indexOf(document.activeElement);
            const prevIndex = (currentIndex - 1 + navLinks.length) % navLinks.length;
            navLinks[prevIndex].focus();
        }
    };
    
    // Ajouter les écouteurs d'événements pour la navigation au clavier
    navContainer.addEventListener('keydown', handleKeyboardNavigation);
    
    // Fermer le menu au redimensionnement de la fenêtre
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 768 && menuButton.getAttribute('aria-expanded') === 'true') {
                toggleMenu(false);
            }
            
            // Mettre à jour l'état mobile/desktop
            if (window.innerWidth > 768) {
                document.body.classList.remove('menu-open');
            }
        }, 250);
    });
    
    // Désactiver le défilement lorsque le menu est ouvert sur mobile
    document.addEventListener('touchmove', (e) => {
        if (isMobile && menuButton.getAttribute('aria-expanded') === 'true') {
            e.preventDefault();
        }
    }, { passive: false });
    
    console.log('Navigation initialisée avec succès');
}

/**
 * Met à jour le lien actif dans la navigation en fonction de l'URL courante
 */
function updateActiveLink() {
    // Récupérer le chemin actuel sans les paramètres de requête ni le hash
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Si aucun lien n'est trouvé, sortir de la fonction
    if (navLinks.length === 0) {
        console.warn('Aucun lien de navigation trouvé');
        return;
    }
    
    let hasActiveLink = false;
    
    // Parcourir tous les liens de navigation
    navLinks.forEach(link => {
        // Récupérer le chemin du lien (sans le chemin complet)
        const linkPath = link.getAttribute('href');
        
        // Vérifier si le lien correspond à la page courante
        const isActive = 
            (currentPath === '' && (linkPath === 'index.html' || linkPath === '/')) ||
            (linkPath !== 'index.html' && currentPath.includes(linkPath.replace('.html', '')));
        
        // Mettre à jour les classes et attributs
        if (isActive) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
            hasActiveLink = true;
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });
    
    // Si aucun lien n'est actif et qu'on n'est pas sur la page d'accueil
    if (!hasActiveLink && !currentPath.endsWith('index.html') && currentPath !== '') {
        const homeLink = document.querySelector('.nav-link[href="index.html"], .nav-link[href="/"]');
        if (homeLink) {
            homeLink.classList.add('active');
            homeLink.setAttribute('aria-current', 'page');
        }
    }
    
    console.log('Mise à jour des liens actifs terminée');
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
