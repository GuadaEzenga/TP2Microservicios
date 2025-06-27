# Notification Service

## 🧩 Funcionalidad

📩 Envía notificaciones a los usuarios sobre:

Confirmación de inscripción.

Cambios en el evento.

Recordatorios de asistencia.

Puede enviar emails o integrarse con otros canales (en futuro: SMS, push).

Escucha eventos de otros microservicios (como inscripción confirmada).

---

## 🚀 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/GuadaEzenga/TP2Microservicios.git
cd notification-service

2. Instalar dependencias:

npm install

3. Configurar el archivo .env:

PORT=3004
MONGO_URI=mongodb://localhost:27017/notifications
JWT_SECRET=guada123
NOTIF_EMAIL=tp2redesagv@gmail.com
NOTIF_PASSWORD=jdvxmfyrgjtinrgs

4. Ejecuta el servidor:

node src/index.js
