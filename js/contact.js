document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const formMessage = document.getElementById('formMessage');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.querySelector('.btn-text');
    const btnLoader = document.querySelector('.btn-loader');
    let formSubmitted = false;

    // Désactiver la validation HTML5 native
    contactForm.setAttribute('novalidate', '');
    
    // Fonction pour afficher les messages
    function showMessage(message, type = 'error') {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Cacher le message après 5 secondes (sauf pour les erreurs de validation)
        if (type === 'success') {
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }
    
    // Fonction de validation des champs
    function validateField(field) {
        const value = field.value.trim();
        const errorElement = field.nextElementSibling;
        
        if (field.required && !value) {
            field.classList.add('error');
            errorElement.textContent = 'Ce champ est requis';
            return false;
        }
        
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                field.classList.add('error');
                errorElement.textContent = 'Veuillez entrer une adresse email valide';
                return false;
            }
        }
        
        if (field.minLength && value.length < field.minLength) {
            field.classList.add('error');
            errorElement.textContent = `Doit contenir au moins ${field.minLength} caractères`;
            return false;
        }
        
        field.classList.remove('error');
        errorElement.textContent = '';
        return true;
    }
    
    // Validation au blur après la première soumission
    document.querySelectorAll('.form-control').forEach(field => {
        field.addEventListener('blur', function() {
            if (formSubmitted) {
                validateField(this);
            }
        });
        
        // Animation des champs au focus
        field.addEventListener('focus', function() {
            const label = this.parentElement.querySelector('.form-label');
            if (label) label.style.color = '#fff';
            this.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        });
        
        field.addEventListener('blur', function() {
            const label = this.parentElement.querySelector('.form-label');
            if (label) label.style.color = 'rgba(255, 255, 255, 0.8)';
            this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
    });
    
    // Gestion de la soumission du formulaire
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        formSubmitted = true;
        
        // Réinitialiser les erreurs
        document.querySelectorAll('.form-control').forEach(input => {
            input.classList.remove('error');
            const errorElement = input.nextElementSibling;
            if (errorElement && errorElement.classList.contains('form-error')) {
                errorElement.textContent = '';
            }
        });
        
        // Valider tous les champs
        const fields = Array.from(document.querySelectorAll('.form-control'));
        const isValid = fields.every(field => validateField(field));
        
        if (!isValid) {
            showMessage('Veuillez corriger les erreurs dans le formulaire.');
            return;
        }
        
        // Désactiver le bouton et afficher le loader
        if (submitBtn) {
            submitBtn.disabled = true;
            if (btnText) btnText.style.display = 'none';
            if (btnLoader) btnLoader.style.display = 'inline-block';
        }
        
        if (formMessage) formMessage.style.display = 'none';
        
        try {
            // Utiliser Formspree pour gérer l'envoi des emails
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            const result = await response.json();
            
            if (response.ok) {
                showMessage('Votre message a été envoyé avec succès ! Je vous répondrai dès que possible.', 'success');
                contactForm.reset();
                formSubmitted = false;
                
                // Redirection après succès (optionnel)
                const nextUrl = contactForm.querySelector('[name="_next"]')?.value;
                if (nextUrl) {
                    setTimeout(() => {
                        window.location.href = nextUrl;
                    }, 2000);
                }
            } else {
                throw new Error(result.errors ? result.errors.map(e => e.message).join(', ') : 'Une erreur est survenue lors de l\'envoi du formulaire.');
            }
            
        } catch (error) {
            console.error('Erreur:', error);
            showMessage(error.message || 'Une erreur est survenue. Veuillez réessayer plus tard.');
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                if (btnText) btnText.style.display = 'inline-block';
                if (btnLoader) btnLoader.style.display = 'none';
            }
        }
    });
});
