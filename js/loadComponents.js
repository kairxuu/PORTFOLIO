/**
 * ===========================================
 * CHARGEMENT DES COMPOSANTS COMMUNS
 * - Charge la barre de navigation (navbar)
 * - Charge le pied de page (footer)
 * - Initialise la navigation et les interactions
 * ===========================================
 */

document.addEventListener('DOMContentLoaded', function() {
    // Désactiver temporairement le défilement pendant le chargement
    document.documentElement.style.overflow = 'hidden';
    
    // Charger la barre de navigation
    loadComponent('components/navbar.html', 'afterbegin', () => {
        // Initialiser la navigation après le chargement
        if (typeof initNavigation === 'function') {
            initNavigation();
        }
        
        // Mettre à jour le lien actif
        updateActiveLink();
        
        // Réactiver le défilement une fois la navigation chargée
        document.documentElement.style.overflow = '';
    });
    
    // Charger le pied de page
    loadComponent('components/footer.html', 'beforeend');
    
    // Gérer les ancres de défilement fluide
    initSmoothScrolling();
});

/**
 * Charge un composant HTML de manière asynchrone
 * @param {string} url - URL du composant à charger
 * @param {string} position - Position d'insertion ('afterbegin', 'beforeend', etc.)
 * @param {Function} callback - Fonction à exécuter après le chargement
 */
function loadComponent(url, position, callback = null) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            // Insère le composant à la position spécifiée
            document.body.insertAdjacentHTML(position, html);
            
            // Exécute le callback si fourni
            if (typeof callback === 'function') {
                callback();
            }
            
            console.log(`Composant chargé: ${url}`);
        })
        .catch(error => {
            console.error(`Erreur lors du chargement de ${url}:`, error);
            
            // Si c'est la navbar, afficher un message d'erreur
            if (url.includes('navbar')) {
                const errorNav = `
                    <header class="error-header">
                        <div class="container">
                            <a href="/" class="logo">AK</a>
                            <p style="color: #ff6b6b; margin: 0 0 0 1rem;">
                                Erreur de chargement de la navigation
                            </p>
                        </div>
                    </header>
                    <div class="header-spacer"></div>
                `;
                document.body.insertAdjacentHTML('afterbegin', errorNav);
            }
        });
}

/**
 * Initialise le défilement fluide pour les ancres
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ne pas interrompre les ancres vides ou vers d'autres pages
            if (href === '#' || href.startsWith('#!')) {
                return;
            }
            
            // Vérifier si le lien pointe vers une ancre sur la même page
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Fermer le menu mobile s'il est ouvert
                const menuButton = document.getElementById('mobile-menu-button');
                if (menuButton && menuButton.getAttribute('aria-expanded') === 'true') {
                    menuButton.click();
                }
                
                // Défilement fluide vers la cible
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Compenser la hauteur de la navbar
                    behavior: 'smooth'
                });
                
                // Mettre à jour l'URL sans recharger la page
                if (history.pushState) {
                    history.pushState(null, null, href);
                } else {
                    location.hash = href;
                }
            }
        });
    });
}

/**
 * Met à jour le lien actif dans la navigation
 * en fonction de la page courante
 */
function updateActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        const isActive = 
            (currentPath === '' && linkPath === 'index.html') ||
            (linkPath !== 'index.html' && currentPath.includes(linkPath.replace('.html', '')));
        
        if (isActive) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });
    
    // Si aucun lien n'est actif, marquer la page d'accueil
    if (!document.querySelector('.nav-link.active') && navLinks.length > 0) {
        const homeLink = document.querySelector('.nav-link[href="index.html"]');
        if (homeLink) {
            homeLink.classList.add('active');
            homeLink.setAttribute('aria-current', 'page');
        }
    }
}

/**
 * Gère le redimensionnement de la fenêtre
 * - Ferme le menu mobile en mode desktop
 * - Met à jour les éléments responsifs
 */
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Fermer le menu mobile si on passe en mode desktop
        const menuButton = document.getElementById('mobile-menu-button');
        if (window.innerWidth > 768 && menuButton && menuButton.getAttribute('aria-expanded') === 'true') {
            menuButton.click();
        }
        
        // Mettre à jour les éléments responsifs si nécessaire
        if (typeof updateResponsiveElements === 'function') {
            updateResponsiveElements();
        }
    }, 250);
});
