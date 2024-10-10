const { HfInference } = require('@huggingface/inference');
require('dotenv').config();

const inference = new HfInference(process.env.HUGGING_FACE_API_KEY);

exports.getActivitySuggestions = async (req, res) => {
    try {
        const response = await inference.chatCompletion({
            model: "meta-llama/Llama-3.2-3B-Instruct",
            messages: [
                { role: "system", content: "Eres un asistente familiar. Tu tarea es ayudar a las familias a planificar su día y sugerir actividades. Proporciona un plan del día y una sugerencia adicional." },
                { role: "user", content: "¿Cuál es el plan del día?" }
            ],
            max_tokens: 150,
        });

        res.json({ suggestions: response.choices[0].message.content });
    } catch (error) {
        console.error('Error al obtener sugerencias de actividades:', error);
        res.status(500).send('Error al obtener sugerencias de actividades');
    }
};
