
export const TRAVEL = {
    fr: {
        title: "Travel Order Resolver",
        subtitle: "Projet Data Science / NLP / Algorithmie",
        intro: `Ce projet consiste à **générer et exploiter des données**, en combinant **NLP** et **ML**, pour produire automatiquement les éléments nécessaires à la détermination du **trajet le plus court**.`,
        metricCard1Title: "Villes couvertes",
        metricCard2Title: "Précision NLP",
        metricCard3Title: "Chemin optimal trouvé",
        demo_title: "Démonstration du projet",
        video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        technical_title: "Étapes techniques du projet",
        technical_steps: `
1. ✍️ Extraction du texte  
Le texte peut provenir de plusieurs sources :  
• Texte saisi directement  
• Fichier texte (.txt) uploadé  
• Audio transcrit via un backend (pydub + speech_recognition)

2. 📥 Import des données SNCF  
• Import des CSV SNCF (stops, stop_times, trips, routes, calendar_dates)  
• Fusion, déduplication et normalisation des noms de gares

3. 🧹 Création et nettoyage du dataset  
• Génération d’un dataset varié (ChatGPT) avec de nombreuses phrases  
• Ajout des villes disposant d’une gare SNCF  
• Nettoyage, normalisation et standardisation des phrases

4. 🧠 Analyse NLP  
• Entraînement d’un modèle spaCy pour extraire les entités (villes)  
• Entraînement d’un second modèle pour détecter les villes de départ, correspondances et arrivée

5. 🗺️ Construction du graphe  
• Villes / gares → nœuds  
• Trajets → arêtes pondérées par le temps

6. ⚡ Algorithme du plus court chemin  
• Utilisation de Dijkstra pour trouver le trajet optimal

7. 🛠️ Gestion des cas particuliers  
• Phrase non française  
• Villes inconnues  
• Aucun trajet possible  
• Autres erreurs spécifiques

8. 🧭 Résultat  
• Itinéraire ordonné  
• Durée totale  
• Détails des correspondances
`,

        learn_title: "Ce que j'ai appris",
        learn_points: `
★ Créer un dataset à partir de zéro pour entraîner et tester des modèles NLP.
★ Manipuler spaCy et construire des pipelines audio+texte.
★ Implémenter des algorithmes de graphe.
★ Encadrer et coordonner une petite équipe (management de 4 personnes).
★ Organiser le travail et gérer les priorités entre data, dev et recherche.`,
        footer: `Github de Léna`
    },

    en: {
        title: "Travel Order Resolver",
        subtitle: "Data Science / NLP / Graph Algorithms Project",
        intro: `This project aims to **generate and leverage data**, combining **NLP and ML** to produce the elements needed to determine **the shortest travel path**.`,
        metricCard1Title: "Cities Covered",
        metricCard2Title: "NLP Accuracy",
        metricCard3Title: "Optimal Path Found",
        demo_title: "Project Demo",
        video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        technical_title: "Project Technical Steps",
        technical_steps: `
1. ✍️ Text Extraction
Text can come from multiple sources:
• Directly entered text
• Uploaded text file (.txt)
• Audio transcribed via a backend (pydub + speech_recognition)

2. 📥 SNCF Data Import
• Import SNCF CSVs (stops, stop_times, trips, routes, calendar_dates)
• Merge, deduplicate, and normalize station names

3. 🧹 Dataset Creation and Cleaning
• Generate a diverse dataset (ChatGPT) with numerous sentences
• Add cities with SNCF stations
• Clean, normalize, and standardize sentences

4. 🧠 NLP Analysis
• Train a spaCy model to extract entities (cities)
• Train a second model to detect departure cities, connections, and arrival cities

5. 🗺️ Graph Construction
• Cities/stations → nodes
• Routes → edges weighted by time

6. ⚡ Shortest Path Algorithm
• Use Dijkstra's algorithm to find the optimal route

7. 🛠️ Handling Edge Cases
• Non-French sentences
• Unknown cities
• No possible route
• Other specific errors

8. 🧭 Result
• Ordered itinerary
• Total duration
• Connection details
`,

        learn_title: "What I Learned",
        learn_points: `
★ Create a dataset from scratch for NLP.
★ Build pipelines combining text and audio.
★ Implement graph algorithms.
★ Lead and coordinate a small team (management of 4 people).
★ Organize workflows and manage priorities across data, development, and research tasks.`,
        footer: `Lena's GitHub`
    }
} as const;
