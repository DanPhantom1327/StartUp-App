const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'startupdb'   // AGREGAMOS { dbName: 'startupdb' }  si no nos guarga en una bd de test
        });
        
        console.log('🔥 MongoDB Conectado a: startupdb');
    } catch (error) {
        console.error('Error conectando a MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;