import React from 'react';

const TaskTable = ({ tasks, onEditTask }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b text-left">Tarea</th>
                        <th className="py-2 px-4 border-b text-left">Asignada a</th>
                        <th className="py-2 px-4 border-b text-left">Estado</th>
                        <th className="py-2 px-4 border-b text-left">Creada por</th> {/* Nueva columna */}
                        <th className="py-2 px-4 border-b text-left">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border-b text-left">{task.name}</td>
                            <td className="py-2 px-4 border-b text-left">{task.assignedTo}</td>
                            <td className="py-2 px-4 border-b text-left">
                                <select
                                    value={task.status}
                                    onChange={(e) => onEditTask(index, { ...task, status: e.target.value })}
                                    className="border border-gray-300 p-1"
                                >
                                    <option value="pendiente">Pendiente</option>
                                    <option value="completa">Completa</option>
                                    <option value="rechazada">Rechazada</option>
                                </select>
                            </td>
                            <td className="py-2 px-4 border-b text-left">Admin</td> {/* Mostrar "Admin" como creador */}
                            <td className="py-2 px-4 border-b text-left">
                                <button
                                    onClick={() => onEditTask(index, { ...task, status: 'rechazada' })}
                                    className="text-red-600 hover:underline"
                                >
                                    Rechazar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskTable;
