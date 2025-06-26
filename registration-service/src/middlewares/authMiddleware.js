const jwt = require('jsonwebtoken');

function authenticateJWT(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        console.log('🛑 No se encontró el header Authorization');
        return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    console.log('🔍 Token recibido:', token);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.error('❌ Error al verificar JWT:', err.message);  // <-- clave
            return res.status(403).json({ error: 'Token inválido' });
        }

        console.log('✅ Token verificado. Payload decodificado:', user);
        req.user = user;
        next();
    });
}

module.exports = authenticateJWT;
