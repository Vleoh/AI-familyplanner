import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Importa los estilos del calendario

const EventCalendar = () => {
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState({}); // Almacena eventos por fecha

    const handleDateChange = (newDate) => {
        setDate(newDate);
        console.log('Fecha seleccionada:', newDate);
    };

    const addEvent = () => {
        const eventName = prompt('Ingrese el nombre del evento:');
        if (eventName) {
            const dateString = date.toDateString();
            setEvents((prevEvents) => ({
                ...prevEvents,
                [dateString]: [...(prevEvents[dateString] || []), eventName],
            }));
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Planificación de Eventos</h2>
            <Calendar
                onChange={handleDateChange}
                value={date}
            />
            <button onClick={addEvent} className="mt-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                Agregar Evento
            </button>
            <div className="mt-4">
                <h3 className="font-bold">Eventos en {date.toDateString()}:</h3>
                <ul>
                    {(events[date.toDateString()] || []).map((event, index) => (
                        <li key={index} className="text-gray-600">{event}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default EventCalendar;
