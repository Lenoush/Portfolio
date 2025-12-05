// lib/lang-spacevr.ts
export const LANG_SPACEVRGAME = {
    fr: {
        title: "Jeu VR Spatial",
        subtitle: "Jeu de survie et réparation en réalité virtuelle",
        intro: "Explorez un vaisseau spatial endommagé en VR et effectuez des tâches de survie et de réparation via des interactions immersives.",
        demo_title: "Démo",
        description_title: "Spécificités",
        description_text: "Le joueur se retrouve à bord d'un vaisseau spatial endommagé et doit accomplir diverses missions de réparation grâce à des interactions VR réalistes sur Meta Quest 3. Le jeu inclut :",
        features: [
            "Système de lumière interactif (click and light)",
            "Bracelet de géolocalisation avec points lumineux indiquant les zones d'interaction",
            "Panneau électrique à réparer : ouverture, récupération d'objets cassés, réparation et remise en place",
            "Pièce d'observation avec store levable révélant le système solaire (planètes en rotation et voie lactée)",
            "Système d'ouverture de portes avec énigmes et codes à déchiffrer",
            "Mécanisme de cartes colorées cachées au sol pour débloquer les portes",
            "Portes automatiques s'ouvrant et se fermant à l'approche du joueur",
            "Micro-ondes de réparation : réparez des objets électroniques avec du scotch",
            "Feedback audio immersif pour guider le joueur"
        ],
        my_contributions_title: "Mes contributions",
        my_contributions: [
            "Conception et implémentation du système d'ouverture de portes (énigmes, codes, cartes colorées)",
            "Développement du mécanisme de portes automatiques réagissant à la proximité du joueur",
            "Création du micro-ondes de réparation avec logique de scotch et feedback audio",
            "Participation à la réparation du panneau électrique (partie la plus intuitive du projet)"
        ],
        learn_title: "Ce que j'ai appris",
        learn_points: `★ Développer des interactions VR réalistes et intuitives
★ Maîtriser Unity et les outils VR pour Meta Quest 3
★ Modéliser et adapter des assets 3D avec Blender
★ Concevoir une expérience utilisateur immersive en VR
★ Collaborer efficacement en équipe avec répartition claire des tâches
★ Intégrer logique spatiale, physique et design d'interaction
★ Optimiser les performances pour une expérience VR fluide`,
        tech_stack_title: "Technologies",
        gallerie_name: "Gallerie",
    },
    en: {
        title: "Space VR Game",
        subtitle: "Survival and repair game in virtual reality",
        intro: "Explore a damaged spaceship in VR and perform survival and repair tasks through immersive interactions.",
        demo_title: "Project demo",
        description_title: "Specifications",
        description_text: "The player finds themselves aboard a damaged spaceship and must complete various repair missions using realistic VR interactions on Meta Quest 3. The game includes:",
        features: [
            "Interactive lighting system (click and light)",
            "Geolocation bracelet with luminous points indicating interaction zones",
            "Electrical panel to repair: opening, retrieving broken objects, repairing and reinstalling",
            "Observation room with liftable blind revealing the solar system (rotating planets and Milky Way)",
            "Door opening system with puzzles and codes to decipher",
            "Hidden colored card mechanism on the floor to unlock doors",
            "Automatic doors that open and close when the player approaches",
            "Repair microwave: fix broken electronic objects using tape",
            "Immersive audio feedback to guide the player"
        ],
        my_contributions_title: "My contributions",
        my_contributions: [
            "Design and implementation of the door opening system (puzzles, codes, colored cards)",
            "Development of automatic door mechanism reacting to player proximity",
            "Creation of the repair microwave with tape logic and audio feedback",
            "Participation in the electrical panel repair (most intuitive part of the project)"
        ],
        learn_title: "What I learned",
        learn_points: `★ Develop realistic and intuitive VR interactions
★ Master Unity and VR tools for Meta Quest 3
★ Model and adapt 3D assets with Blender
★ Design an immersive VR user experience
★ Collaborate effectively in a team with clear task distribution
★ Integrate spatial logic, physics, and interaction design
★ Optimize performance for a smooth VR experience`,
        tech_stack_title: "Technologies",
        gallerie_name: "Gallery",
    }
} as const;