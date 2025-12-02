// Données des métriques
export const modelsData = [
    {
        name: "Random Forest",
        val: {
            accuracy: "77.1%",
            auc: "89.1%",

            f1_macro: "73.3%",
            precision_macro: "77.2%",
            recall_macro: "73.4%",

            f1_weighted: "75.2%",
            precision_weighted: "76.7%",
            recall_weighted: "77.1%",

            per_class: [
                { label: "BACTERIA", f1: "82.0%", precision: "74.3%", recall: "91.4%" },
                { label: "NORMAL", f1: "87.2%", precision: "85.0%", recall: "89.6%" },
                { label: "VIRUS", f1: "50.8%", precision: "72.2%", recall: "39.2%" },
            ],
        },
        test: {
            accuracy: "77.0%",
            auc: "89.8%",

            f1_macro: "74.8%",
            precision_macro: "75.8%",
            recall_macro: "74.9%",

            f1_weighted: "76.1%",
            precision_weighted: "76.1%",
            recall_weighted: "77.0%",

            per_class: [
                { label: "BACTERIA", f1: "80.8%", precision: "77.2%", recall: "84.8%" },
                { label: "NORMAL", f1: "88.1%", precision: "84.9%", recall: "91.6%" },
                { label: "VIRUS", f1: "55.5%", precision: "65.3%", recall: "48.3%" },
            ],
        },
    },
    {
        name: "SVC avec PCA",
        val: {
            accuracy: "76.4%",
            f1_macro: "73.5%",
            auc: "89.5%",

            precision_macro: "75.4%",
            recall_macro: "73.4%",

            f1_weighted: "75.1%",
            precision_weighted: "75.4%",
            recall_weighted: "76.4%",

            per_class: [
                { label: "BACTERIA", f1: "80.8%", precision: "74.7%", recall: "87.9%" },
                { label: "NORMAL", f1: "88.8%", precision: "88.1%", recall: "89.6%" },
                { label: "VIRUS", f1: "51.0%", precision: "63.5%", recall: "42.7%" },
            ],
        },
        test: {
            accuracy: "76.6%",
            f1_macro: "74.3%",
            auc: "88.4%",

            precision_macro: "75.3%",
            recall_macro: "74.3%",

            f1_weighted: "75.6%",
            precision_weighted: "75.6%",
            recall_weighted: "76.6%",

            per_class: [
                { label: "BACTERIA", f1: "80.5%", precision: "76.7%", recall: "84.8%" },
                { label: "NORMAL", f1: "88.2%", precision: "85.8%", recall: "90.7%" },
                { label: "VIRUS", f1: "54.2%", precision: "63.4%", recall: "47.4%" },
            ],
        },
    },
    {
        name: "SVC sans PCA",
        val: {
            accuracy: "71.5%",
            f1_macro: "70.6%",
            auc: "86.7%",

            precision_macro: "70.8%",
            recall_macro: "70.4%",

            f1_weighted: "71.5%",
            precision_weighted: "71.4%",
            recall_weighted: "71.5%",

            per_class: [
                { label: "BACTERIA", f1: "74.1%", precision: "73.1%", recall: "75.1%" },
                { label: "NORMAL", f1: "88.7%", precision: "89.4%", recall: "87.9%" },
                { label: "VIRUS", f1: "49.0%", precision: "49.8%", recall: "48.3%" },
            ],
        },
        test: {
            accuracy: "72.7%",
            f1_macro: "72.4%",
            auc: "86.2%",

            precision_macro: "72.0%",
            recall_macro: "73.0%",

            f1_weighted: "72.8%",
            precision_weighted: "73.1%",
            recall_weighted: "72.7%",

            per_class: [
                { label: "BACTERIA", f1: "74.6%", precision: "77.4%", recall: "72.0%" },
                { label: "NORMAL", f1: "89.5%", precision: "87.4%", recall: "91.6%" },
                { label: "VIRUS", f1: "53.1%", precision: "51.2%", recall: "55.2%" },
            ],
        },
    },
    {
        name: "SVM (Scikit-Learn SVM)",
        val: {
            accuracy: "71.5%",
            f1_macro: "70.6%",
            auc: "86.8%",

            precision_macro: "70.8%",
            recall_macro: "70.4%",

            f1_weighted: "71.5%",
            precision_weighted: "71.4%",
            recall_weighted: "71.5%",

            per_class: [
                { label: "BACTERIA", f1: "74.1%", precision: "73.1%", recall: "75.1%" },
                { label: "NORMAL", f1: "88.7%", precision: "89.4%", recall: "87.9%" },
                { label: "VIRUS", f1: "49.0%", precision: "49.8%", recall: "48.3%" },
            ],
        },
        test: {
            accuracy: "72.7%",
            f1_macro: "72.4%",
            auc: "86.2%",

            precision_macro: "72.0%",
            recall_macro: "73.0%",

            f1_weighted: "72.8%",
            precision_weighted: "73.1%",
            recall_weighted: "72.7%",

            per_class: [
                { label: "BACTERIA", f1: "74.6%", precision: "77.4%", recall: "72.0%" },
                { label: "NORMAL", f1: "89.5%", precision: "87.4%", recall: "91.6%" },
                { label: "VIRUS", f1: "53.1%", precision: "51.2%", recall: "55.2%" },
            ],
        },
    }
];




