import React, { useState } from 'react';
import AddTaskModal from '../components/AddTaskModal';
import TaskTable from '../components/TaskTable';

const Tasks = ({ users }) => {
    const [tasks, setTasks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const handleEditTask = (index, updatedTask) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = updatedTask;
        setTasks(updatedTasks);
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Tareas</h1>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white p-2 rounded mb-4"
            >
                Agregar Tarea
            </button>
            <TaskTable tasks={tasks} onEditTask={handleEditTask} />
            <AddTaskModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddTask={handleAddTask}
                users={users}
            />
        </div>
    );
};

export default Tasks;
