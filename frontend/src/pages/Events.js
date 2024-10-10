import React from 'react';
import EventCalendar from '../components/EventCalendar';

const Events = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Planificación de Eventos</h1>
            <EventCalendar />
        </div>
    );
};

export default Events;
