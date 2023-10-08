const metiers = [
    {
        value: 'developpeur-front-end',
        label: 'Développeur Web Front-End',
        description: 'Crée l\'interface utilisateur du site Web en utilisant HTML, CSS et JavaScript.',
        objectif: [
            'Développer des pages web interactives et conviviales.',
            'Optimiser la performance et la compatibilité avec les navigateurs.',
            'Collaborer avec des designers pour intégrer des maquettes.',
        ],
    },
    {
        value: 'developpeur-back-end',
        label: 'Développeur Web Back-End',
        description: 'Gère la logique serveur, traite les données et travaille avec des bases de données.',
        objectif: [
            'Créer des API et des services web robustes.',
            'Gérer les bases de données et assurer leur intégrité.',
            'Optimiser les performances du serveur.',
        ],
    },
    {
        value: 'developpeur-full-stack',
        label: 'Développeur Full Stack',
        description: 'Possède des compétences tant en développement Front-End qu\'en Back-End, capable de travailler sur toutes les parties d\'une application Web.',
        objectif: [
            'Développer et maintenir l\'ensemble d\'une application Web.',
            'Intégrer des fonctionnalités Front-End et Back-End.',
            'Assurer la cohérence et la sécurité de l\'application.',
        ],
    },
    {
        value: 'web-designer',
        label: 'Web Designer',
        description: 'Se concentre sur la conception visuelle d\'un site Web, y compris la mise en page, les couleurs, les polices et les éléments graphiques.',
        objectif: [
            'Créer des maquettes de conception attrayantes.',
            'S\'assurer que le design est cohérent avec la marque de l\'entreprise.',
            'Collaborer avec les développeurs pour implémenter le design.',
        ],
    },
    {
        value: 'ux-designer',
        label: 'UX Designer',
        description: 'Se spécialise dans l\'amélioration de l\'expérience utilisateur, en créant des interfaces utilisateur intuitives et conviviales.',
        objectif: [
            'Mener des recherches utilisateur pour comprendre les besoins.',
            'Créer des wireframes et des prototypes interactifs.',
            'Optimiser le flux de l\'utilisateur pour une expérience fluide.',
        ],
    },
    {
        value: 'ui-designer',
        label: 'UI Designer',
        description: 'Conçoit l\'interface utilisateur en se concentrant sur l\'aspect visuel, la disposition et l\'ergonomie.',
        objectif: [
            'Créer des éléments visuels attrayants, y compris les icônes et les boutons.',
            'Optimiser l\'utilisabilité de l\'interface.',
            'Travailler en étroite collaboration avec les développeurs Front-End.',
        ],
    },
    {
        value: 'architecte-web',
        label: 'Architecte Web',
        description: 'Planifie l\'infrastructure d\'une application Web, y compris les choix technologiques et l\'organisation des composants.',
        objectif: [
            'Définir l\'architecture globale de l\'application.',
            'Sélectionner les technologies appropriées pour les besoins du projet.',
            'Garantir la scalabilité et la robustesse de l\'application.',
        ],
    },
    {
        value: 'chef-de-projet-web',
        label: 'Chef de Projet Web',
        description: 'Gère les équipes de développement et assure que les projets Web sont livrés dans les délais et respectent les spécifications.',
        objectif: [
            'Planifier et coordonner les tâches de l\'équipe.',
            'Gérer le budget et les ressources du projet.',
            'Assurer une communication efficace entre les parties prenantes.',
        ],
    },
    {
        value: 'testeur-web',
        label: 'Testeur Web',
        description: 'Effectue des tests fonctionnels et de qualité pour s\'assurer que les sites Web fonctionnent correctement et sont exempts de bugs.',
        objectif: [
            'Développer des scénarios de test exhaustifs.',
            'Exécuter des tests manuels et automatisés.',
            'Rapporter et suivre les problèmes identifiés.',
        ],
    },
    {
        value: 'analyste-de-donnees-web',
        label: 'Analyste de Données Web',
        description: 'Analyse les données d\'utilisation des sites Web pour tirer des informations utiles pour l\'amélioration de l\'expérience utilisateur.',
        objectif: [
            'Collecter et analyser les données d\'utilisation.',
            'Identifier des tendances et des opportunités d\'optimisation.',
            'Fournir des recommandations basées sur les données.',
        ],
    },
    {
        value: 'specialiste-en-securite-web',
        label: 'Spécialiste en Sécurité Web',
        description: 'Protège les sites Web contre les menaces de sécurité en mettant en place des mesures de sécurité appropriées.',
        objectif: [
            'Identifier les vulnérabilités de sécurité.',
            'Mettre en place des pare-feu et des mesures de protection.',
            'Surveiller en continu la sécurité de l\'application.',
        ],
    },
    {
        value: 'integrateur-web',
        label: 'Intégrateur Web',
        description: 'Intègre les éléments Front-End dans un système de gestion de contenu (CMS) ou une plateforme de commerce électronique.',
        objectif: [
            'Intégrer des maquettes de design en code HTML et CSS.',
            'Assurer la compatibilité avec différentes plateformes et navigateurs.',
            'Collaborer avec les développeurs Back-End pour l\'intégration.',
        ],
    },
    {
        value: 'consultant-en-optimisation-de-site-web',
        label: 'Consultant en Optimisation de Site Web',
        description: 'Fournit des conseils pour améliorer la performance, la vitesse et la convivialité d\'un site Web.',
        objectif: [
            'Effectuer des audits de site pour identifier les opportunités d\'amélioration.',
            'Proposer des recommandations pour optimiser le site.',
            'Suivre les améliorations et mesurer les résultats.',
        ],
    },
    {
        value: 'administrateur-de-systemes-web',
        label: 'Administrateur de Systèmes Web',
        description: 'Gère les serveurs Web, assure leur disponibilité et leur performance.',
        objectif: [
            'Configurer et maintenir les serveurs Web.',
            'Surveiller les performances et la sécurité des serveurs.',
            'Résoudre les problèmes techniques liés à l\'hébergement Web.',
        ],
    },
    {
        value: 'developpeur-web-mobile',
        label: 'Développeur Web Mobile',
        description: 'Crée des applications mobiles en utilisant des technologies Web comme React Native ou Flutter.',
        objectif: [
            'Développer des applications mobiles cross-plateformes.',
            'Optimiser les performances et l\'expérience utilisateur sur mobile.',
            'Intégrer des fonctionnalités spécifiques aux appareils mobiles.',
        ],
    },
    {
        value: 'developpeur-de-jeux-web',
        label: 'Développeur de Jeux Web',
        description: 'Crée des jeux qui fonctionnent dans un navigateur Web en utilisant HTML5, CSS3 et JavaScript.',
        objectif: [
            'Concevoir et développer des jeux Web interactifs.',
            'Optimiser les performances pour une expérience de jeu fluide.',
            'Intégrer des fonctionnalités de jeu avancées.',
        ],
    },
    {
        value: 'freelance',
        label: 'Développeur Web Freelance',
        description: 'Travaille de manière indépendante sur des projets de développement Web pour différents clients.',
        objectif: [
            'Gérer son propre portefeuille de clients et de projets.',
            "S'adapter à des technologies et des besoins variés.",
            'Assurer la satisfaction client et la livraison à temps.',
        ],
    },
    {
        value: 'enseignant-ou-formateur-en-developpement-web',
        label: 'Enseignant ou Formateur en Développement Web',
        description: 'Partage ses connaissances en enseignant le développement Web dans des écoles ou en ligne.',
        objectif: [
            'Enseigner les principes fondamentaux du développement Web.',
            'Préparer les étudiants à une carrière dans le domaine du développement.',
            'Créer des programmes de formation efficaces.',
        ],
    },
];

export default metiers;
