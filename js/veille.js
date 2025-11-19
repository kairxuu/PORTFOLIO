// Configuration des flux RSS avec filtrage avancé
const RSS_FEEDS = [
    {
        name: 'ZDNet France - IA',
        url: 'https://www.zdnet.fr/feeds/rss/actualites/ia-intelligence-artificielle/',
        maxItems: 10,  // On en prend plus pour mieux filtrer ensuite
        // Mots-clés à inclure (au moins un doit être présent)
        includeKeywords: [
            'agent IA', 'agents IA', 'automatisation IA', 'IA autonome',
            'système multi-agents', 'LLM', 'LLMs', 'GPT-4', 'GPT-3', 'GPT-5',
            'autogpt', 'auto-gpt', 'babyagi', 'orchestration IA', 'workflow IA',
            'automatisation intelligente', 'IA auto-gérée', 'IA auto-apprenante',
            'IA auto-optimisante', 'autonomous agents', 'multi-agent system',
            'agentic workflow', 'autogen', 'langchain', 'langchain agents',
            'orchestrateur IA', 'workflow automatisé', 'automatisation de processus',
            'IA générative avancée', 'système d\'agents autonomes', 'IA agentielle',
            'processus autonome', 'système auto-adaptatif', 'auto-optimisation IA'
        ],
        // Mots-clés à exclure (aucun ne doit être présent)
        excludeKeywords: [
            // Technologie non pertinente
            'chatbot', 'chatbots', 'chat bot', 'assistant virtuel', 'assistante virtuelle',
            'voiture', 'automobile', 'véhicule', 'drone', 'drones', 'robot', 'robots', 'robotique',
            'jeu vidéo', 'jeux vidéo', 'gaming', 'jeu', 'jeux', 'console', 'playstation', 'xbox', 'nintendo',
            'téléphone', 'smartphone', 'iphone', 'samsung', 'galaxy', 'mobile', 'appareil', 'appareils',
            'crypto', 'cryptomonnaie', 'blockchain', 'bitcoin', 'ethereum', 'nft', 'métaverse', 'web3',
            'santé', 'médical', 'médicale', 'médicaux', 'médicament', 'hôpital', 'médecine',
            'finance', 'bancaire', 'banque', 'assurance', 'trading', 'bourse',
            'marketing', 'publicité', 'réseaux sociaux', 'facebook', 'instagram', 'tiktok',
            'télévision', 'télé', 'série', 'film', 'cinéma', 'netflix', 'disney+', 'amazon prime',
            'sport', 'football', 'tennis', 'basket', 'rugby', 'jeux olympiques',
            'politique', 'élection', 'gouvernement', 'président', 'ministre',
            'environnement', 'écologie', 'climat', 'réchauffement climatique',
            'cuisine', 'recette', 'restaurant', 'alimentation',
            'mode', 'vêtement', 'prêt-à-porter', 'luxe',
            'voyage', 'tourisme', 'hôtel', 'avion', 'vacances'
        ]
    },
    {
        name: 'Journal du Net - Tech',
        url: 'https://www.journaldunet.com/rss/tech.xml',
        maxItems: 10,
        includeKeywords: [
            'agent IA', 'agents IA', 'automatisation IA', 'IA autonome',
            'système multi-agents', 'LLM', 'LLMs', 'GPT-4', 'GPT-3', 'GPT-5',
            'autogpt', 'auto-gpt', 'babyagi', 'orchestration IA', 'workflow IA',
            'automatisation intelligente', 'IA auto-gérée', 'IA auto-apprenante',
            'IA auto-optimisante', 'autonomous agents', 'multi-agent system',
            'agentic workflow', 'autogen', 'langchain', 'langchain agents'
        ],
        excludeKeywords: [
            'chatbot', 'voiture', 'automobile', 'véhicule', 'drone', 'robot', 'robotique',
            'jeu vidéo', 'gaming', 'jeu', 'smartphone', 'téléphone', 'mobile',
            'crypto', 'cryptomonnaie', 'blockchain', 'bitcoin', 'nft', 'métaverse',
            'santé', 'médical', 'finance', 'bancaire', 'marketing', 'publicité',
            'télévision', 'sport', 'politique', 'environnement', 'écologie',
            'cuisine', 'mode', 'voyage', 'tourisme'
        ]
    },
    {
        name: 'Les Numériques - IA',
        url: 'https://www.lesnumeriques.com/rss/ia-intelligence-artificielle.xml',
        maxItems: 10,
        includeKeywords: [
            'agent IA', 'agents IA', 'automatisation IA', 'IA autonome',
            'système multi-agents', 'LLM', 'LLMs', 'GPT-4', 'GPT-3', 'GPT-5',
            'autogpt', 'auto-gpt', 'orchestration IA', 'workflow IA',
            'automatisation intelligente', 'IA auto-gérée', 'IA auto-apprenante',
            'IA auto-optimisante', 'autonomous agents', 'multi-agent system',
            'agentic workflow', 'autogen', 'langchain', 'langchain agents'
        ],
        excludeKeywords: [
            'chatbot', 'voiture', 'automobile', 'véhicule', 'drone', 'robot', 'robotique',
            'jeu vidéo', 'gaming', 'jeu', 'smartphone', 'téléphone', 'mobile',
            'crypto', 'cryptomonnaie', 'blockchain', 'bitcoin', 'nft', 'métaverse',
            'santé', 'médical', 'finance', 'bancaire', 'marketing', 'publicité',
            'télévision', 'sport', 'politique', 'environnement', 'écologie',
            'cuisine', 'mode', 'voyage', 'tourisme'
        ]
    }
];

// Fonction pour vérifier si un contenu contient des mots-clés
function containsKeywords(content, keywords) {
    if (!content || !keywords || keywords.length === 0) return true;
    const contentLower = content.toLowerCase();
    return keywords.some(keyword => 
        contentLower.includes(keyword.toLowerCase())
    );
}

// Fonction pour filtrer les articles en fonction des mots-clés
function filterArticles(articles, feedConfig) {
    if (!feedConfig) return [];
    
    return articles.filter(article => {
        if (!article || !article.title) return false;
        
        const title = (article.title || '').toLowerCase();
        const description = (article.description || '').toLowerCase();
        
        // Vérifier les mots-clés à exclure (priorité haute)
        if (feedConfig.excludeKeywords) {
            const excludeInTitle = containsKeywords(title, feedConfig.excludeKeywords);
            const excludeInDescription = containsKeywords(description, feedConfig.excludeKeywords);
            
            if (excludeInTitle || excludeInDescription) {
                console.log('Article exclu (mot-clé exclu):', article.title);
                return false;
            }
        }
        
        // Vérifier les mots-clés à inclure (au moins un doit être présent)
        if (feedConfig.includeKeywords) {
            const includedInTitle = containsKeywords(title, feedConfig.includeKeywords);
            const includedInDescription = containsKeywords(description, feedConfig.includeKeywords);
            
            if (!includedInTitle && !includedInDescription) {
                console.log('Article exclu (aucun mot-clé inclus):', article.title);
                return false;
            }
        }
        
        return true;
    });
}

// Fonction utilitaire pour récupérer avec timeout
async function fetchWithTimeout(resource, options = {}) {
    const { timeout = 10000 } = options;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    try {
        const response = await fetch(resource, {
            ...options,
            signal: controller.signal  
        });
        clearTimeout(id);
        return response;
    } catch (error) {
        clearTimeout(id);
        throw error;
    }
}

// Afficher les erreurs
function showError(message) {
    const container = document.getElementById('veille-container');
    if (!container) {
        console.error('Conteneur non trouvé');
        return;
    }
    
    container.innerHTML = `
        <div style="
            max-width: 800px;
            margin: 40px auto;
            padding: 30px;
            background: #fff3f3;
            border: 1px solid #ffcdd2;
            border-radius: 8px;
            text-align: center;
        ">
            <h3 style="color: #c62828; margin-top: 0;">Erreur de chargement</h3>
            <p>${message}</p>
            <p><small>Vérifiez votre connexion Internet et réessayez.</small></p>
            <button onclick="window.location.reload()" 
                    style="
                        padding: 10px 25px;
                        background: #4CAF50;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 16px;
                        margin-top: 15px;
                    ">
                <i class="fas fa-sync-alt"></i> Réessayer
            </button>
        </div>
    `;
}

// Récupérer le contenu du flux avec plusieurs proxys de secours
async function fetchFeed(url) {
    const proxies = [
        `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
        `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
        `https://cors-anywhere.herokuapp.com/${url}`,
        `https://api.corsproxy.io/?${encodeURIComponent(url)}`
    ];

    let lastError = null;

    for (const proxyUrl of proxies) {
        try {
            console.log('Essai avec le proxy:', proxyUrl);
            const response = await fetchWithTimeout(proxyUrl, {
                headers: {
                    'Accept': 'application/xml, text/xml',
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });

            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }

            const data = await response.text();
            // Si c'est une réponse JSON (cas de allorigins.win)
            if (proxyUrl.includes('allorigins.win')) {
                const json = JSON.parse(data);
                return json.contents;
            }
            return data;
        } catch (error) {
            console.error(`Échec avec le proxy: ${error.message}`);
            lastError = error;
            continue;
        }
    }

    throw new Error(`Tous les proxys ont échoué. Dernière erreur: ${lastError?.message}`);
}

// Afficher les articles
function displayArticles(articles) {
    const container = document.getElementById('veille-container');
    if (!container) return;
    
    if (articles.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 30px;">
                <p>Aucun article disponible pour le moment.</p>
                <button onclick="window.location.reload()" 
                        style="
                            padding: 8px 20px;
                            margin-top: 15px;
                            background: #4CAF50;
                            color: white;
                            border: none;
                            border-radius: 4px;
                            cursor: pointer;
                        ">
                    Rafraîchir
                </button>
            </div>
        `;
        return;
    }
    
    let html = '<div style="max-width: 900px; margin: 0 auto; padding: 20px;">';
    
    articles.forEach(article => {
        // Nettoyer la description HTML
        const cleanDescription = article.description
            ? article.description
                .replace(/<[^>]*>/g, '') // Supprimer les balises HTML
                .replace(/\s+/g, ' ')    // Remplacer les espaces multiples
                .trim()
            : 'Aucune description disponible';
            
        // Formater la date
        const formattedDate = article.pubDate || new Date().toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
            
        html += `
            <div style="
                border: 1px solid #e0e0e0;
                border-radius: 8px;
                padding: 25px;
                margin-bottom: 25px;
                background: white;
                box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                transition: transform 0.2s, box-shadow 0.2s;
            " onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.12)'" 
               onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 8px rgba(0,0,0,0.08)'">
                <h3 style="
                    margin: 0 0 12px 0;
                    color: #1a73e8;
                    font-size: 1.4em;
                    line-height: 1.3;
                ">
                    <a href="${article.link}" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       style="
                           color: inherit;
                           text-decoration: none;
                           transition: color 0.2s;
                       " 
                       onmouseover="this.style.color='#0d47a1'"
                       onmouseout="this.style.color='#1a73e8'">
                        ${article.title || 'Sans titre'}
                    </a>
                </h3>
                
                <div style="
                    display: flex;
                    align-items: center;
                    color: #5f6368;
                    font-size: 0.9em;
                    margin: 8px 0 15px 0;
                ">
                    <span style="margin-right: 15px;">
                        <i class="fas fa-newspaper" style="margin-right: 5px;"></i>
                        ${article.source || 'Source inconnue'}
                    </span>
                    <span>
                        <i class="far fa-calendar-alt" style="margin-right: 5px;"></i>
                        ${formattedDate}
                    </span>
                </div>
                
                <div style="
                    color: #3c4043;
                    line-height: 1.6;
                    margin-bottom: 15px;
                    font-size: 1.05em;
                ">
                    ${cleanDescription.substring(0, 250)}${cleanDescription.length > 250 ? '...' : ''}
                </div>
                
                <a href="${article.link}" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   style="
                       display: inline-flex;
                       align-items: center;
                       color: #1a73e8;
                       text-decoration: none;
                       font-weight: 500;
                       transition: color 0.2s;
                   "
                   onmouseover="this.style.color='#0d47a1'"
                   onmouseout="this.style.color='#1a73e8'">
                    Lire l'article complet
                    <i class="fas fa-external-link-alt" style="margin-left: 6px; font-size: 0.9em;"></i>
                </a>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// Charger et afficher les articles
async function loadAndDisplayArticles() {
    const container = document.getElementById('veille-container');
    if (!container) {
        console.error('Conteneur non trouvé');
        return;
    }

    // Afficher un message de chargement amélioré
    container.innerHTML = `
        <div style="
            max-width: 800px;
            margin: 40px auto;
            padding: 40px 20px;
            text-align: center;
        ">
            <div style="
                display: inline-flex;
                flex-direction: column;
                align-items: center;
                padding: 30px 40px;
                background: #f8f9fa;
                border-radius: 12px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            ">
                <div class="spinner" style="
                    width: 50px;
                    height: 50px;
                    border: 4px solid rgba(0,0,0,0.1);
                    border-radius: 50%;
                    border-top-color: #1a73e8;
                    animation: spin 1s ease-in-out infinite;
                    margin-bottom: 20px;
                "></div>
                <h3 style="
                    margin: 0 0 10px 0;
                    color: #202124;
                    font-size: 1.5em;
                ">
                    Chargement des actualités...
                </h3>
                <p style="
                    margin: 0;
                    color: #5f6368;
                    max-width: 400px;
                    line-height: 1.5;
                ">
                    Nous récupérons les derniers articles pour vous.
                    <br>Veuillez patienter quelques instants.
                </p>
            </div>
        </div>
        <style>
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
        </style>
    `;

    try {
        console.log('Démarrage du chargement des flux RSS...');
        const allArticles = [];
        
        for (const feed of RSS_FEEDS) {
            try {
                console.log(`Tentative de chargement: ${feed.name} (${feed.url})`);
                
                // Mettre à jour le statut de chargement
                const statusElement = container.querySelector('p');
                if (statusElement) {
                    statusElement.textContent = `Chargement de ${feed.name}...`;
                }
                
                const xmlContent = await fetchFeed(feed.url);
                console.log('Réponse reçue, traitement en cours...');
                
                // Parser le XML
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlContent, "text/xml");
                
                // Vérifier les erreurs de parsing
                const parserError = xmlDoc.querySelector('parsererror');
                if (parserError) {
                    console.error('Erreur de parsing XML:', parserError.textContent);
                    throw new Error('Format de flux invalide');
                }
                
                // Extraire les articles
                const items = xmlDoc.querySelectorAll('item');
                console.log(`${items.length} articles trouvés dans le flux`);
                
                items.forEach((item, index) => {
                    if (index >= feed.maxItems) return;
                    
                    const title = item.querySelector('title')?.textContent?.trim() || 'Sans titre';
                    let link = item.querySelector('link')?.textContent?.trim() || 
                              item.querySelector('link')?.getAttribute('href') || '#';
                    
                    // Nettoyer le lien si nécessaire
                    if (link.startsWith('//')) {
                        link = 'https:' + link;
                    }
                    
                    const description = item.querySelector('description')?.textContent?.trim() || 
                                      item.querySelector('content\:encoded')?.textContent?.trim() || '';
                    
                    let pubDate = item.querySelector('pubDate')?.textContent || 
                                 item.querySelector('dc\:date')?.textContent || 
                                 new Date().toISOString();
                    
                    // Nettoyer la date
                    try {
                        pubDate = new Date(pubDate).toLocaleDateString('fr-FR', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                        });
                    } catch (e) {
                        console.warn('Erreur de format de date:', e);
                        pubDate = new Date().toLocaleDateString('fr-FR');
                    }
                    
                    allArticles.push({
                        title,
                        link,
                        description,
                        source: feed.name,
                        pubDate
                    });
                });
                
                // Filtrer les articles en fonction des mots-clés
                const feedArticles = [];
                items.forEach(item => {
                    const title = item.querySelector('title')?.textContent?.trim() || 'Sans titre';
                    let link = item.querySelector('link')?.textContent?.trim() || 
                              item.querySelector('link')?.getAttribute('href') || '#';
                    
                    if (link.startsWith('//')) {
                        link = 'https:' + link;
                    }
                    
                    const description = item.querySelector('description')?.textContent?.trim() || 
                                      item.querySelector('content\:encoded')?.textContent?.trim() || '';
                    
                    let pubDate = item.querySelector('pubDate')?.textContent || 
                                 item.querySelector('dc\:date')?.textContent || 
                                 new Date().toISOString();
                    
                    try {
                        pubDate = new Date(pubDate).toLocaleDateString('fr-FR', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                        });
                    } catch (e) {
                        console.warn('Erreur de format de date:', e);
                        pubDate = new Date().toLocaleDateString('fr-FR');
                    }
                    
                    feedArticles.push({
                        title,
                        link,
                        description,
                        source: feed.name,
                        pubDate
                    });
                });
                
                const filteredArticles = filterArticles(feedArticles, feed);
                console.log(`→ ${filteredArticles.length} articles filtrés sur ${feedArticles.length} depuis ${feed.name}`);
                
                // Ajouter les articles filtrés
                allArticles.push(...filteredArticles);
                
            } catch (error) {
                console.error(`Erreur avec le flux ${feed.name}:`, error);
                // Continuer avec le flux suivant même en cas d'erreur
                continue;
            }
        }
        
        console.log(`Total des articles chargés: ${allArticles.length}`);
        
        if (allArticles.length > 0) {
            // Trier par pertinence (nombre de mots-clés correspondants) puis par date
            allArticles.forEach(article => {
                // Compter les mots-clés correspondants dans le titre et la description
                const content = `${article.title || ''} ${article.description || ''}`.toLowerCase();
                article.relevance = 0;
                
                // Parcourir tous les flux pour compter les correspondances de mots-clés
                RSS_FEEDS.forEach(feed => {
                    if (feed.includeKeywords) {
                        feed.includeKeywords.forEach(keyword => {
                            if (content.includes(keyword.toLowerCase())) {
                                article.relevance += 1;
                            }
                        });
                    }
                });
            });
            
            // Trier d'abord par pertinence (décroissant) puis par date (décroissant)
            allArticles.sort((a, b) => {
                if (b.relevance !== a.relevance) {
                    return b.relevance - a.relevance; // Plus de correspondances = plus pertinent
                }
                return new Date(b.pubDate) - new Date(a.pubDate); // Même pertinence : plus récent d'abord
            });
            
            // Limiter le nombre total d'articles
            const maxTotalArticles = 12; // Un peu plus pour avoir une marge
            const articlesToShow = allArticles.slice(0, maxTotalArticles);
            
            console.log(`Affichage de ${articlesToShow.length} articles`);
            displayArticles(articlesToShow);
        } else {
            throw new Error('Aucun article n\'a pu être chargé depuis les flux disponibles');
        }
        
    } catch (error) {
        console.error('Erreur lors du chargement des articles:', error);
        
        // Message d'erreur plus détaillé
        let errorMessage = 'Impossible de charger les articles. ';
        
        if (error.message.includes('Failed to fetch') || 
            error.message.includes('NetworkError') ||
            error.message.includes('network')) {
            errorMessage += 'Vérifiez votre connexion Internet et réessayez.';
        } else if (error.message.includes('CORS') || 
                  error.message.includes('proxy')) {
            errorMessage += 'Problème de connexion au serveur. Veuillez réessayer plus tard.';
        } else {
            errorMessage += error.message || 'Une erreur inattendue est survenue.';
        }
        
        showError(errorMessage);
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    console.log('=== Initialisation de la page Veille Technologique ===');
    console.log('User-Agent:', navigator.userAgent);
    console.log('En ligne:', navigator.onLine ? 'Oui' : 'Non');
    
    // Démarrer le chargement des articles
    loadAndDisplayArticles();
    
    // Gestionnaire pour le bouton de rafraîchissement
    const refreshBtn = document.getElementById('refresh-btn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Rafraîchissement manuel demandé');
            loadAndDisplayArticles();
            
            // Animation du bouton
            refreshBtn.disabled = true;
            refreshBtn.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> Chargement...';
            
            // Réactiver le bouton après 5 secondes max
            setTimeout(() => {
                refreshBtn.disabled = false;
                refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Actualiser';
            }, 5000);
        });
    }
    
    // Gestionnaire pour le bouton de vidage du cache
    const clearCacheBtn = document.getElementById('clear-cache-btn');
    if (clearCacheBtn) {
        clearCacheBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('Voulez-vous vraiment vider le cache et recharger les articles ?')) {
                console.log('Vidage du cache demandé');
                // Forcer le rechargement sans utiliser le cache
                const url = new URL(window.location.href);
                url.searchParams.set('_', Date.now());
                window.location.href = url.toString();
            }
        });
    }
});