import React, { useState } from 'react';

const AddUser = ({ onAddUser }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [relationship, setRelationship] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !age) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        const newUser = {
            name,
            age: parseInt(age, 10),
            relationship,
        };

        onAddUser(newUser);
        setName('');
        setAge('');
        setRelationship('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-4">
            <h2 className="text-xl font-bold mb-4">Agregar Miembro de la Familia</h2>
            <div className="mb-4">
                <label className="block mb-2">Nombre:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 p-2 w-full"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Edad:</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="border border-gray-300 p-2 w-full"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2">Relación:</label>
                <select
                    value={relationship}
                    onChange={(e) => setRelationship(e.target.value)}
                    className="border border-gray-300 p-2 w-full"
                >
                    <option value="">Selecciona una relación</option>
                    <option value="padre">Padre</option>
                    <option value="madre">Madre</option>
                    <option value="hermano">Hermano</option>
                    <option value="hermana">Hermana</option>
                    <option value="hijo">Hijo</option>
                    <option value="hija">Hija</option>
                    <option value="otro">Otro</option>
                </select>
            </div>
            <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                Agregar Miembro
            </button>
        </form>
    );
};

export default AddUser;
