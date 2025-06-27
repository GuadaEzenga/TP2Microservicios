# Auth Service

Este microservicio forma parte del sistema de gestión de eventos y conferencias. Se encarga de registrar y autenticar usuarios, implementando autenticación básica, tokens JWT, refresh tokens y segundo factor con TOTP (Google Authenticator).

---

## 🧩 Funcionalidad

- Registro de usuarios (asistentes, organizadores, expositores)
- Login con Auth Basic
- Verificación de segundo factor con TOTP
- Emisión y validación de JWT
- Emisión y renovación de Refresh Tokens

---

## 🚀 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/GuadaEzenga/TP2Microservicios.git

2. Instalar dependencias:

npm install

3. Configurar el archivo .env:

PORT=3000
JWT_SECRET=guada123
REFRESH_SECRET=guada123
MONGO_URI=mongodb://localhost:27017/authservice

4. Ejecuta el servidor:

npm start
