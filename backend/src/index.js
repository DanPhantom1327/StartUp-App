require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Conectar a DB
connectDB();

// Middlewares
app.use(cors()); // Permite conexiones desde tu frontend
app.use(express.json()); // Permite leer JSON del body

// Rutas
app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});