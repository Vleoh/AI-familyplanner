import React, { useState } from 'react';
import axios from 'axios';

const AIChat = () => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [messages, setMessages] = useState([]); // Para almacenar el historial de mensajes

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newMessage = { role: 'user', content: input };
        setMessages([...messages, newMessage]); // Agregar el nuevo mensaje al historial

        try {
            const res = await axios.post('http://localhost:5000/api/ai/ask', { input }); // Enviar el mensaje
            setResponse(res.data.response); // Asumiendo que la respuesta es un texto
            setMessages([...messages, newMessage, { role: 'assistant', content: res.data.response }]); // Agregar la respuesta al historial
        } catch (error) {
            console.error('Error al comunicarse con la IA', error);
            setResponse('Error al comunicar con la IA.'); // Mensaje de error
        }

        setInput(''); // Limpiar el campo de entrada
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Interactuar con IA</h2>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Escribe tu pregunta"
                    className="border border-gray-300 p-2 mb-4 rounded"
                />
                <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                    Enviar
                </button>
            </form>
            <div className="mt-4">
                <h3 className="font-bold">Respuesta de la IA:</h3>
                <p>{response}</p>
            </div>
            <div className="mt-4">
                <h3 className="font-bold">Historial de Conversación:</h3>
                {messages.map((msg, index) => (
                    <p key={index} className={msg.role === 'user' ? 'text-blue-600' : 'text-green-600'}>
                        {msg.role === 'user' ? 'Usuario: ' : 'IA: '}{msg.content}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default AIChat;
