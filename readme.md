# 🧠 AI Text Insight App

Aplicación fullstack que analiza textos usando inteligencia artificial.

---

## 🚀 Tecnologías

* React (Vite + TypeScript)
* Node.js + Express
* OpenAI API

---

## 📂 Estructura

```
ai-text-insight-app/
├── backend/
└── frontend/ia-text/
```

---

## ⚙️ Ejecutar localmente

### 1. Clonar proyecto

```
git clone <tu_repo>
cd ai-text-insight-app
```

---

### 2. Backend

```
cd backend
npm install
```

Crear archivo `.env`:

```
OPENAI_API_KEY=your_api_key_here
```

Ejecutar:

```
node server.js
```

Backend en:

```
http://localhost:3001
```

---

### 3. Frontend

```
cd ../frontend/ia-text
npm install
npm run dev
```

App en:

```
http://localhost:5173
```

---

## 🧪 Uso

1. Pegar texto
2. Click en **Analizar**
3. Ver:

* Resumen
* Sentimiento
* Tags

---

## 📦 .env.example

Ubicación:

```
backend/.env.example
```

Contenido:

```
OPENAI_API_KEY=your_api_key_here
```

---

## ⚠️ Notas

* No subir `.env`
* Ejecutar backend antes del frontend

---
