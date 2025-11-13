/**
 * Charge les composants communs (navbar, footer) de manière dynamique
 * et met à jour la navigation active en fonction de la page courante
 */

document.addEventListener('DOMContentLoaded', function() {
    // Charge la navbar
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(html => {
            // Insère la navbar au début du body
            document.body.insertAdjacentHTML('afterbegin', html);
            
            // Met à jour le lien actif dans la navbar
            updateActiveLink();
            
            // Initialise le menu mobile
            initMobileMenu();
        })
        .catch(error => {
            console.error('Erreur lors du chargement de la navbar:', error);
        });

    // Charge le footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(html => {
            // Insère le footer à la fin du body
            document.body.insertAdjacentHTML('beforeend', html);
        })
        .catch(error => {
            console.error('Erreur lors du chargement du footer:', error);
        });
});

/**
 * Met à jour le lien actif dans la navbar en fonction de la page courante
 */
function updateActiveLink() {
    const currentPage = getCurrentPageName();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Retourne le nom de la page courante
 * @returns {string} Le nom de la page sans l'extension
 */
function getCurrentPageName() {
    const path = window.location.pathname;
    if (path === '/' || path.endsWith('index.html')) {
        return 'index';
    }
    return path.split('/').pop().replace('.html', '');
}

/**
 * Initialise le menu mobile
 */
// Gère le redimensionnement de la fenêtre pour le menu mobile
window.addEventListener('resize', function() {
    const navLinks = document.querySelector('.nav-links');
    
    if (!navLinks) return;
    
    // Réinitialise le menu quand on passe en mode desktop
    if (window.innerWidth > 767) {
        navLinks.classList.remove('show');
    }
});
