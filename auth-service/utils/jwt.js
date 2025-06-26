const jwt = require('jsonwebtoken');

function generateToken(user) {
  return jwt.sign(
    { email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
}

function generateRefreshToken(user) {
  return jwt.sign(
    { email: user.email },
    process.env.REFRESH_SECRET,
    { expiresIn: '24h' }
  );
}

module.exports = { generateToken, generateRefreshToken };
