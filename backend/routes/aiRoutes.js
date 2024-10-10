const express = require('express');
const { HfInference } = require('@huggingface/inference'); // Importar la biblioteca correcta
require('dotenv').config();

const router = express.Router();
const inference = new HfInference(process.env.HUGGING_FACE_API_KEY); // Usar el token de Hugging Face

router.post('/ask', async (req, res) => {
    const userInput = req.body.input; // Obtener la entrada del usuario
    let responseText = '';

    // Mensaje inicial para establecer el contexto
    const initialMessage = "Eres un asistente familiar. Responde a las preguntas de manera clara y útil, teniendo en cuenta que estás ayudando a una familia.";

    try {
        // Usar el método chatCompletion para obtener respuestas
        const response = await inference.chatCompletion({
            model: "meta-llama/Llama-3.2-3B-Instruct",
            messages: [
                { role: "system", content: initialMessage }, // Mensaje inicial
                { role: "user", content: userInput }
            ],
            max_tokens: 150,
        });

        responseText = response.choices[0].message.content;
        res.json({ response: responseText }); // Devolver la respuesta completa de la IA
    } catch (error) {
        console.error('Error en la comunicación con el modelo de IA:', error);
        res.status(500).send('Error en la comunicación con el modelo de IA');
    }
});

module.exports = router;
