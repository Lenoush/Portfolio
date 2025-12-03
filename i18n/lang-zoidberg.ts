// lib/lang-zoidberg.ts
export const LANG_ZOIDBERG = {
    fr: {
        footer: `Github de Léna`,
        title: "Classification de scans pulmonaires",
        subtitle: "Projet Data Science | Machine Learning | Deep Learning",
        intro: "Ce projet vise à **classifier des scans pulmonaires** en différentes catégories en utilisant des **techniques de machine learning et de deep learning**. L'objectif principal est de réaliser un **benchmark de plusieurs modèles** afin de sélectionner le plus performant pour la classification d'images médicales.",

        metrics_title: "Performances des modèles testés",

        preprocess_data: "Prétraitement des données",
        example_scans_title: "Exemples de scans",
        example_scans: [
            { caption: "Scan sain", path: "/zoidberg/Scan_Sain_Exemple.jpeg" },
            { caption: "Pneumonie bactérienne", path: "/zoidberg/Scan_PneumonieBacterienne.jpeg" },
            { caption: "Pneumonie virale", path: "/zoidberg/Scan_PneumonieViral.jpeg" },
        ],

        dataset_title_global: "Statistiques globales du dataset",
        dataset_nb_image:"Nombre d'image",
        dataset_summary_train: "4099",
        dataset_summary_test: "879",
        dataset_summary_val: "878",
        dataset_summary_total: "5856",

        dataset_title_train: "Répartition du dataset d'entraînement",
        dataset: {
            headers: ["Classe", "Nombre de scanners", "Poids"],
            rows: [
                ["BACTERIA", "2780", "0.70"],
                ["NORMAL", "1585", "1.23"],
                ["VIRUS", "1493", "1.30"],
            ],
        },
        dataset_image_caption: "Distribution des classes",

        preprocessing_title: "Étapes de prétraitement chez les données d'entraînement",
        preprocessing_steps: [
            {
                text: "Normalisation avec StandardScaler pour uniformiser les valeurs des pixels",
                images: ["/zoidberg/avantScaler.png", "/zoidberg/apresScaler.png"]
            },
            {
                text: "Redimensionnement des images pour homogénéiser les dimensions",
                images: ["/zoidberg/imageweight.png"],
                caption: "Histogramme des dimensions"
            },
            {
                text: "Augmentation des données par flip horizontal (particulièrement utile pour la classe virale)",
                images: ["/zoidberg/flipimage.png"],
                caption: "Exemple de flip horizontal"
            },
        ],

        models_comparison_title: "Benchmark des modèles testés",
        same_models_comparison_title: "Comparaison Val vs Test par modèle",
        validation_metrics_title: "Métriques de validation",
        test_metrics_title: "Métriques de test",

        best_models_title: "Meilleurs modèles",
        best_modeling_text: `Les modèles **Random Forest** et **SVC avec PCA** sont très proches en performance !  
• Random Forest excelle légèrement en précision globale et AUC, avec de très bons scores pour toutes les classes.  
• SVC avec PCA offre un F1 Macro légèrement plus élevé sur certaines validations, avec une excellente détection des radiographies saines et des pneumonies bactériennes.  
• Les deux modèles ont encore plus de marge pour la détection des pneumonies virales, mais restent les meilleurs choix pour ce dataset.
`,

        comparison_title: "Comparaison des modèles testés",

        test_SVC_avec_PCA_title: "Tester le modèle : SVC avec PCA",
        show_proba: "Probabilités prédites par le modèle",
        upload_label: "Uploader un scan pulmonaire (jpg/png)",
        uploaded_image_caption: "Image sélectionnée",
        healthy_label: "Sain",
        bacterial_label: "Pneumonie bactérienne",
        viral_label: "Pneumonie virale",
        reset_button: "Réinitialiser",
        info_uploaded: "Image uploadée par l'utilisateur",
        correct_result: "Le modèle a correctement identifié la catégorie : {expected_class}",
        wrong_result: "Erreur : le modèle a prédit {predicted_class} au lieu de {expected_class}",

        learn_title: "Ce que j'ai appris",
        learn_points: `
★ Prétraiter des images médicales pour le machine learning.
★ Implémenter et comparer plusieurs modèles de classification.
★ Analyser les performances des modèles avec des métriques adaptées.
★ Utiliser des techniques d'augmentation de données pour améliorer la robustesse.
★ Travailler avec des datasets déséquilibrés et appliquer des techniques de rééchantillonnage.
★ Déployer un modèle de classification via une interface utilisateur simple.`,
    },

    en: {
        footer: `Lena's GitHub`,
        title: "Lung Scan Classification",
        subtitle: "Data Science | Machine Learning | Deep Learning Project",
        intro: "This project aims to **classify lung scans** into different categories using **machine learning and deep learning techniques**. The main objective is to **benchmark multiple models** to select the most effective one for medical image classification.",

        metrics_title: "Performance of Tested Models",

        preprocess_data: "Data Preprocessing",
        example_scans_title: "Example Scans",
        example_scans: [
            { caption: "Healthy Scan", path: "/zoidberg/Scan_Sain_Exemple.jpeg" },
            { caption: "Bacterial Pneumonia", path: "/zoidberg/Scan_PneumonieBacterienne.jpeg" },
            { caption: "Viral Pneumonia", path: "/zoidberg/Scan_PneumonieViral.jpeg" },
        ],

        dataset_title_global: "Global Dataset Statistics",
        dataset_nb_image: "Number of Images",
        dataset_summary_train: "4099",
        dataset_summary_test: "879",
        dataset_summary_val: "878",
        dataset_summary_total: "5856",

        dataset_title_train: "Training Dataset Distribution",
        dataset: {
            headers: ["Class", "Number of Scanners", "Weight"],
            rows: [
                ["BACTERIA", "2780", "0.70"],
                ["NORMAL", "1585", "1.23"],
                ["VIRUS", "1493", "1.30"],
            ],
        },
        dataset_image_caption: "Class Distribution",

        preprocessing_title: "Preprocessing Steps on Training Data",
        preprocessing_steps: [
            {
                text: "Normalization using StandardScaler to standardize pixel values",
                images: ["/zoidberg/avantScaler.png", "/zoidberg/apresScaler.png"]
            },
            {
                text: "Image resizing to homogenize dimensions",
                images: ["/zoidberg/imageweight.png"],
                caption: "Dimension histogram"
            },
            {
                text: "Data augmentation using horizontal flip (particularly useful for viral class)",
                images: ["/zoidberg/flipimage.png"],
                caption: "Horizontal flip example"
            },
        ],

        models_comparison_title: "Benchmark of Tested Models",
        same_models_comparison_title: "Val vs Test Comparison per Model",
        validation_metrics_title: "Validation Metrics",
        test_metrics_title: "Test Metrics",

        best_models_title: "Best Models",
        best_modeling_text: `The **Random Forest** and **SVC with PCA** models are very close in performance!  
• Random Forest slightly excels in overall precision and AUC, with very good scores across all classes.  
• SVC with PCA offers a slightly higher F1 Macro on certain validations, with excellent detection of healthy scans and bacterial pneumonia.  
• Both models still have room for improvement in detecting viral pneumonia but remain the top choices for this dataset.
`,

        comparison_title: "Model Comparison",

        test_SVC_avec_PCA_title: "Test the Model: SVC with PCA",
        show_proba: "Model Predicted Probabilities",
        upload_label: "Upload a lung scan (jpg/png)",
        uploaded_image_caption: "Selected Image",
        healthy_label: "Healthy",
        bacterial_label: "Bacterial Pneumonia",
        viral_label: "Viral Pneumonia",
        reset_button: "Reset",
        info_uploaded: "Image uploaded by user",
        correct_result: "The model correctly identified the category: {expected_class}",
        wrong_result: "Error: the model predicted {predicted_class} instead of {expected_class}",

        learn_title: "What I Learned",
        learn_points: `
★ Preprocessing medical images for machine learning.
★ Implementing and comparing multiple classification models.
★ Analyzing model performance with appropriate metrics.
★ Using data augmentation techniques to improve robustness.
★ Working with imbalanced datasets and applying resampling techniques.
★ Deploying a classification model via a simple user interface.`,
    },
} as const;