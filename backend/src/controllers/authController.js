const User = require('../models/user.js');
// Importar la librería para encriptar contraseña
const bcrypt = require('bcryptjs'); 

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Verificacion si el email existe
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Crear el objeto de usuario (que aun no se guarda)
        user = new User({
            name,
            email,
            password
        });

        //ENCRIPTAR LA CONTRASEÑA
        // Generamos una "sal" (nivel de complejidad)
        const salt = await bcrypt.genSalt(10);
        // Reemplazamos la contraseña plana por la encriptada
        user.password = await bcrypt.hash(password, salt);

        // Guardar en MongoDB
        await user.save();

        res.status(201).json({ message: 'Usuario registrado y encriptado con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};


exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        //Validar email ,buscar si el usuario existe por email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Correo no registrado' });
        }

        // comparacion de la contraseña encriptada 
        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        // 3. si coincide la respuesta es exitosa 
        res.status(200).json({ 
            message: 'Login exitoso', 
            user: { 
                id: user._id, 
                name: user.name, 
                email: user.email 
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};