# Registration Service

## 🧩 Funcionalidad

🧾 Gestiona las inscripciones de los asistentes a eventos.

📋 Registra qué usuario se inscribió a qué evento.

🚫 Controla duplicados, capacidad máxima, cancelaciones.

---

## 🚀 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/GuadaEzenga/TP2Microservicios.git
cd registration-service

2. Instalar dependencias:

npm install

3. Configurar el archivo .env:

PORT=3002
MONGO_URI=mongodb://localhost:27017/registration-db
JWT_SECRET=guada123

4. Ejecuta el servidor:

node src/index.js
