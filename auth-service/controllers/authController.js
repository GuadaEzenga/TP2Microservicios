const bcrypt = require('bcrypt');
const speakeasy = require('speakeasy');
const qrcode = require('qrcode');
const User = require('../models/User');
const { generateToken, generateRefreshToken } = require('../utils/jwt');

async function register(req, res) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Basic ')) return res.status(400).json({ message: 'Auth Basic required' });

    const [email, password] = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'User already exists' });

    const passwordHash = await bcrypt.hash(password, 10);
    const totpSecret = speakeasy.generateSecret({ name: `TP2(${email})` });

    const user = new User({
      email,
      passwordHash,
      role: req.body.role || 'asistente',
      totpSecret: totpSecret.base32
    });

    await user.save();

    const qr = await qrcode.toDataURL(totpSecret.otpauth_url);
    res.status(201).json({ message: 'User registered', qr, secret: totpSecret.base32 });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function login(req, res) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Basic ')) return res.status(400).json({ message: 'Auth Basic required' });

    const [email, password] = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(401).json({ message: 'Invalid credentials' });

    res.json({ message: 'Password OK. Send TOTP code.', email });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function verifyTotp(req, res) {
  try {
    const { email, code } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const verified = speakeasy.totp.verify({
      secret: user.totpSecret,
      encoding: 'base32',
      token: code
    });

    if (!verified) return res.status(401).json({ message: 'Invalid TOTP code' });

    const token = generateToken(user);
    const refresh = generateRefreshToken(user);
    res.json({ token, refresh });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

async function refreshToken(req, res) {
  try {
    const { token } = req.body;
    const jwt = require('jsonwebtoken');

    const payload = jwt.verify(token, process.env.REFRESH_SECRET);
    const user = await User.findOne({ email: payload.email });
    if (!user) throw new Error('User not found');

    const newToken = generateToken(user);
    res.json({ token: newToken });

  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid refresh token' });
  }
}

module.exports = { register, login, verifyTotp, refreshToken };
