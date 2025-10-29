// Fonction pour initialiser le menu mobile
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    
    // Fonction pour basculer le menu mobile
    function toggleMobileMenu() {
        const menu = document.querySelector('.md\:hidden + .hidden');
        if (menu) {
            menu.classList.toggle('hidden');
        }
    }

    // Événement de clic sur le bouton du menu mobile
    if (mobileMenuButton) {
        mobileMenuButton.removeEventListener('click', toggleMobileMenu); // Éviter les doublons
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }

    // Fermer le menu mobile lors du clic sur un lien
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) { // Seulement pour les mobiles
                toggleMobileMenu();
            }
        });
    });
}

// Fonction pour initialiser les animations au défilement
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer les sections pour l'animation
    document.querySelectorAll('section, .animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
}

// Fonction pour initialiser le défilement fluide
function initSmoothScrolling() {
    // Animation fluide du défilement pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Ne pas empêcher le comportement par défaut pour les liens externes
            if (targetId === '#' || targetId.startsWith('http') || targetId.startsWith('mailto:')) {
                return;
            }
            
            e.preventDefault();
            
            // Si c'est un lien vers une autre page, laisser le navigateur gérer la navigation
            if (targetId.startsWith('/') && !targetId.startsWith('#')) {
                window.location.href = targetId;
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header')?.offsetHeight || 80;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Mettre à jour l'URL sans recharger la page
                history.pushState(null, '', targetId);
            }
        });
    });
}

// Fonction pour initialiser le formulaire de contact
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des valeurs du formulaire
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Ici, vous pouvez ajouter le code pour envoyer les données à un serveur
            console.log('Formulaire de contact soumis:', formData);
            
            // Afficher un message de succès
            alert('Merci pour votre message ! Je vous répondrai dès que possible.');
            
            // Réinitialiser le formulaire
            contactForm.reset();
        });
    }
}

// Fonction pour initialiser le filtrage des projets
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-blue-600', 'text-white');
                btn.classList.add('bg-gray-700', 'text-gray-300');
            });
            
            // Ajouter la classe active au bouton cliqué
            button.classList.remove('bg-gray-700', 'text-gray-300');
            button.classList.add('bg-blue-600', 'text-white');
            
            // Récupérer la catégorie sélectionnée
            const category = button.textContent.trim().toLowerCase();
            
            // Filtrer les projets
            const projects = document.querySelectorAll('.project-card');
            projects.forEach(project => {
                if (category === 'tous') {
                    project.style.display = 'block';
                } else {
                    const technologies = project.getAttribute('data-technologies') || '';
                    if (technologies.toLowerCase().includes(category)) {
                        project.style.display = 'block';
                    } else {
                        project.style.display = 'none';
                    }
                }
            });
        });
    });
}

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initScrollAnimations();
    initSmoothScrolling();
    initContactForm();
    initProjectFilter();
});

// Réinitialiser les animations lors de la navigation entre les pages
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        initScrollAnimations();
    }
});
