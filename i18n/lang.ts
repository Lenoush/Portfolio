// lib/lang.ts
export const LANG = {
    fr: {
        title: "Portfolio - Léna Oudjman",
        subtitle: "Data Scientist | Machine Learning Ingénieure",
        intro: "Bienvenue sur mon portfolio ! Je suis Léna Oudjman, une passionnée de data science et de machine learning. Découvrez mes projets et n'hésitez pas à me contacter.",

        proj_zoidberg: "Classification de scanners",
        proj_zoidberg_description: "Prédire si un scan de poumon est sain ou malade.",

        proj_travel: "Plannificateur de voyage",
        proj_travel_description: "Générer un itinéraire de voyage à partir de données textuelles ou audio.",

        proj_battleship: "Bataille Navale",
        proj_battleship_description: "Recréer le jeu classique de la bataille navale.",

        proj_sparta: "SpartaInvest",
        proj_sparta_description: "Créer des conseils pour l'investissement boursier basés sur l'IA.",

        proj_vr_space_game: "Jeu Spatial en VR",
        proj_vr_space_game_description: "Développer un jeu d'exploration spatiale en réalité virtuelle immersif.",
    },

    en: {
        title: "Portfolio - Léna Oudjman",
        subtitle: "Data Scientist | Machine Learning Engineer",
        intro: "Welcome to my portfolio! I'm Léna Oudjman, a passionate data scientist and machine learning enthusiast. Explore my projects and feel free to reach out to me.",

        proj_zoidberg: "Lung Scan Classification",
        proj_zoidberg_description: "Predict whether a lung scan is healthy or shows disease.",

        proj_travel: "Travel Order Resolver",
        proj_travel_description: "Generate a travel itinerary from text or audio data.",

        proj_battleship: "Battleship Game",
        proj_battleship_description: "Recreate the classic battleship game.",

        proj_sparta: "SpartaInvest",
        proj_sparta_description: "Create advice for stock investment based on AI.",

        proj_vr_space_game: "VR Space Game",
        proj_vr_space_game_description: "Develop an immersive virtual reality space exploration game.",
    },
} as const;

export type Language = keyof typeof LANG;
export type Translation = typeof LANG.fr;