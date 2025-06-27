// middleware/auth.js
const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      id: decoded.id,       // asegúrate de que el token tenga el `id`
      email: decoded.email,
      role: decoded.role
    };
    next();
  } catch (err) {
    res.status(403).json({ error: 'Token inválido' });
  }
};
