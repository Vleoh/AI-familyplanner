const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importar el paquete cors
const familyRoutes = require('./routes/familyRoutes');
const aiRoutes = require('./routes/aiRoutes'); // Importar las rutas de IA
const activityRoutes = require('./routes/activityRoutes'); // Importar las rutas de actividades
require('dotenv').config();
const axios = require('axios');

const app = express();
app.use(express.json());

// Configurar CORS
app.use(cors({
    origin: 'http://localhost:3000', // Permitir solicitudes desde tu aplicación React
    methods: ['GET', 'POST'], // Métodos permitidos
    credentials: true // Permitir credenciales si es necesario
}));

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api/family', familyRoutes);
app.use('/api/ai', aiRoutes); // Integrar las rutas de IA
app.use('/api/activities', activityRoutes); // Integrar las rutas de actividades

// Endpoint de prueba
app.post('/api/test', (req, res) => {
    const { message } = req.body; // Obtener el mensaje del cuerpo de la solicitud
    console.log('Mensaje recibido:', message); // Log para ver el mensaje en la consola del servidor
    res.json({ response: `Mensaje recibido: ${message}` }); // Devolver una respuesta simple
});

const PORT = process.env.PORT || 5000;

// Middleware para parsear JSON
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
