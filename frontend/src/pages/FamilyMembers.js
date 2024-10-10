import React from 'react';

const FamilyMembers = ({ users }) => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Miembros de la Familia</h1>
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
