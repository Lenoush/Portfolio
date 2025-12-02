// app/api/predict/route.ts
import { NextRequest, NextResponse } from 'next/server';
import * as ort from 'onnxruntime-node';
import path from 'path';

const CLASS_NAMES = ["NORMAL", "BACTERIA", "VIRUS"];

// Cache du modèle pour éviter de le recharger à chaque requête
let modelCache: any = null;

async function loadModel() {
    if (modelCache) {
        return modelCache
    }

    try {
        // Note: Vous devrez convertir votre modèle .pkl en ONNX
        // Voir les instructions ci-dessous
        const modelPath = path.join(process.cwd(), 'public/zoidberg/models/model.onnx');
        modelCache = await ort.InferenceSession.create(modelPath);
        return modelCache;
    } catch (error) {
        console.error('Error loading model:', error);
        throw error;
    }
}

export async function POST(request: NextRequest) {
    try {
        const { imageVector } = await request.json();

        if (!imageVector || !Array.isArray(imageVector)) {
            return NextResponse.json(
                { error: 'Invalid image vector' },
                { status: 400 }
            );
        }

        // Charger le modèle
        const session = await loadModel();

        // Préparer les données d'entrée
        const tensor = new ort.Tensor('float32', Float32Array.from(imageVector), [1, imageVector.length]);
        
        // Faire la prédiction
        const feeds = { input: tensor };
        const results = await session.run(feeds);
        
        // Extraire les probabilités
        const probabilities = Array.from(results.probabilities.data as Float32Array);
        
        // Trouver la classe prédite
        const maxIndex = probabilities.indexOf(Math.max(...probabilities));
        const predicted = CLASS_NAMES[maxIndex];

        // Formater la réponse
        const response = {
            predicted,
            probabilities: {
                [CLASS_NAMES[0]]: probabilities[0],
                [CLASS_NAMES[1]]: probabilities[1],
                [CLASS_NAMES[2]]: probabilities[2],
            }
        };

        return NextResponse.json(response);
    } catch (error) {
        console.error('Prediction error:', error);
        return NextResponse.json(
            { error: 'Prediction failed', details: (error as Error).message },
            { status: 500 }
        );
    }
}