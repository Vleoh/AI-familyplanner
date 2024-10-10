import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Asegúrate de tener un archivo CSS para estilos

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Asegúrate de que haya un elemento con id 'root' en tu index.html
);
