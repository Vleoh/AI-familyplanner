import React, { useState } from 'react';
import AddUser from '../components/AddUser';

const FamilyMembers = () => {
    const [users, setUsers] = useState([
        { name: 'Juan', age: 30, relationship: 'hermano' },
        { name: 'María', age: 28, relationship: 'hermana' },
    ]);

    const handleAddUser = (newUser) => {
        setUsers((prevUsers) => [...prevUsers, newUser]);
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Miembros de la Familia</h1>
            <AddUser onAddUser={handleAddUser} />
            <ul className="mt-4">
                {users.map((user, index) => (
                    <li key={index} className="text-gray-600">
                        {user.name} - {user.age} años - Relación: {user.relationship}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FamilyMembers;
