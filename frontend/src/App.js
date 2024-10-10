import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { HomeIcon, UsersIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'; // Cambia ChatIcon por ChatBubbleLeftIcon
import Home from './pages/Home'; // Asegúrate de que la ruta y el nombre sean correctos
import FamilyMembers from './pages/FamilyMembers'; // Asegúrate de que esta ruta sea correcta
import AIChat from './components/AIChat'; // Importar el componente AIChat
import Events from './pages/Events'; // Asegúrate de importar la página de eventos
import Tasks from './pages/Tasks'; // Importar el componente Tasks

function App() {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú
    const menuRef = useRef(null); // Ref para el menú
    const buttonRef = useRef(null); // Ref para el botón
    const [users, setUsers] = useState([
        { name: 'Juan', age: 30, relationship: 'hermano' },
        { name: 'María', age: 28, relationship: 'hermana' },
        // Agrega más usuarios según sea necesario
    ]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Cerrar el menú si se hace clic fuera de él
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Router>
            <div className="flex min-h-screen bg-gray-100">
                <aside ref={menuRef} className={`fixed inset-y-0 left-0 w-64 bg-blue-600 text-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:relative md:translate-x-0 z-50`}>
                    <div className="p-6">
                        <h1 className="text-2xl font-bold">AI Family Planner</h1>
                    </div>
                    <nav className="mt-10">
                        <ul>
                            <li className="hover:bg-blue-700 transition duration-300">
                                <Link to="/" className="flex items-center py-2 px-4">
                                    <HomeIcon className="h-5 w-5 mr-2" /> {/* Icono de Inicio */}
                                    Inicio
                                </Link>
                            </li>
                            <li className="hover:bg-blue-700 transition duration-300">
                                <Link to="/family" className="flex items-center py-2 px-4">
                                    <UsersIcon className="h-5 w-5 mr-2" /> {/* Icono de Miembros de la Familia */}
                                    Miembros de la Familia
                                </Link>
                            </li>
                            <li className="hover:bg-blue-700 transition duration-300">
                                <Link to="/disputes" className="flex items-center py-2 px-4">
                                    <ChatBubbleLeftIcon className="h-5 w-5 mr-2" /> {/* Icono de Resolución de Disputas */}
                                    Resolución de Disputas
                                </Link>
                            </li>
                            <li className="hover:bg-blue-700 transition duration-300">
                                <Link to="/tasks" className="block py-2 px-4">Tareas y Responsabilidades</Link>
                            </li>
                            <li className="hover:bg-blue-700 transition duration-300">
                                <Link to="/events" className="block py-2 px-4">Planificación de Eventos</Link>
                            </li>
                            <li className="hover:bg-blue-700 transition duration-300">
                                <Link to="/ai" className="block py-2 px-4">Interactuar con IA</Link>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <div className={`flex-1 p-6 transition-all duration-300 ${isOpen ? 'md:ml-64' : ''}`}>
                    <button ref={buttonRef} onClick={toggleMenu} className="md:hidden p-2 text-blue-600">
                        {isOpen ? 'Cerrar Menú' : 'Abrir Menú'}
                    </button>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/family" component={() => <FamilyMembers users={users} />} />
                        <Route path="/disputes" component={() => <div>Resolución de Disputas</div>} />
                        <Route path="/tasks" component={() => <Tasks users={users} />} /> {/* Asegúrate de pasar los usuarios aquí */}
                        <Route path="/events" component={Events} />
                        <Route path="/ai" component={AIChat} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;