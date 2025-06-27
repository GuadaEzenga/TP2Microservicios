# 🎟️ Event Service - TP2 Microservicios

Servicio para la gestión de eventos dentro del sistema de conferencias y eventos profesionales. Permite crear, consultar, actualizar y eliminar eventos.

## 📌 Funcionalidades

- Crear nuevos eventos
- Consultar la lista de eventos
- Consultar un evento específico
- Actualizar eventos
- Eliminar eventos
- Validación JWT (token generado por Auth Service)

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- MongoDB con Mongoose
- JWT (para autenticación)
- dotenv (configuración)
- CORS

---

## ⚙️ Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/GuadaEzenga/TP2Microservicios.git
cd event-service

2. Instalar dependecias:

npm install

3. Crear archivo .env:

PORT=3001
MONGO_URI=mongodb://localhost:27017/eventsdb
JWT_SECRET=guada123

4. Inicia el servidor

node app.js