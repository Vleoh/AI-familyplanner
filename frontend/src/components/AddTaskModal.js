import React, { useState } from 'react';

const AddTaskModal = ({ isOpen, onClose, onAddTask, users }) => {
    const [taskName, setTaskName] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [status, setStatus] = useState('pendiente');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskName || !assignedTo) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        const newTask = {
            name: taskName,
            assignedTo,
            status,
            createdBy: 'Admin', // Aquí se establece el creador de la tarea
        };

        onAddTask(newTask);
        setTaskName('');
        setAssignedTo('');
        setStatus('pendiente');
        onClose(); // Cierra el modal
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Agregar Tarea</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2">Nombre de la Tarea:</label>
                        <input
                            type="text"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                            className="border border-gray-300 p-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Asignar a:</label>
                        <select
                            value={assignedTo}
                            onChange={(e) => setAssignedTo(e.target.value)}
                            className="border border-gray-300 p-2 w-full"
                            required
                        >
                            <option value="">Selecciona un usuario</option>
                            {users.map((user, index) => (
                                <option key={index} value={user.name}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Estado:</label>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="border border-gray-300 p-2 w-full"
                        >
                            <option value="pendiente">Pendiente</option>
                            <option value="completa">Completa</option>
                            <option value="rechazada">Rechazada</option>
                        </select>
                    </div>
                    <div className="flex justify-end">
                        <button type="button" onClick={onClose} className="mr-2 bg-gray-300 p-2 rounded">
                            Cancelar
                        </button>
                        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
                            Agregar Tarea
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTaskModal;
