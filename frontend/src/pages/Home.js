import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const fetchSuggestions = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/activities/suggestions');
                setSuggestions(res.data.suggestions.split('\n')); // Suponiendo que las sugerencias vienen separadas por saltos de línea
            } catch (error) {
                console.error('Error al obtener sugerencias:', error);
            }
        };

        fetchSuggestions();
    }, []);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <h1 className="text-3xl font-bold mb-4 text-blue-600">Bienvenido a AI Family Planner</h1>
            <p className="text-gray-700">Aquí puedes gestionar las actividades y responsabilidades de tu familia.</p>
            <h2 className="text-2xl font-semibold mt-4 text-green-500">Sugerencias de Actividades:</h2>
            <ul className="list-disc pl-5 mt-2">
                {suggestions.map((suggestion, index) => (
                    <li key={index} className="text-gray-600">{suggestion}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
