# React Google Calendar App

Aplicación web desarrollada con React, TypeScript y Vite que permite visualizar y gestionar eventos de Google Calendar en un calendario interactivo. Incluye autenticación, integración con Firebase y personalización de la experiencia de usuario.

## Demo

![Demo de la aplicación](src/assets/demo/demoCalendar.gif)

---

## Estructura de Carpetas

```
src/
  ├── auth/           # Autenticación de usuarios (layouts, páginas, rutas)
  ├── Calendar/       # Lógica y vistas del calendario (componentes, páginas, rutas)
  ├── firebase/       # Configuración e integración con Firebase
  ├── store/          # Estado global con Redux Toolkit (slices, thunks)
  ├── theme/          # Temas y estilos personalizados
  ├── hooks/          # Custom hooks reutilizables
  ├── helpers/        # Funciones utilitarias
  ├── router/         # Rutas principales de la app
  ├── assets/         # Recursos estáticos (imágenes, videos, etc.)
  ├── main.tsx        # Punto de entrada de la app
  └── index.css       # Estilos globales
```

---

## ¿Cómo correr el proyecto?

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repo>
   cd react-api-calendar-google
   ```
2. **Instala las dependencias:**
   ```bash
   npm install
   # o
   yarn install
   ```
3. **Configura las variables de entorno:**
   - Crea un archivo `.env` en la raíz con tu configuración de Firebase:
     ```env
     VITE_FIREBASE_API_KEY=...
     VITE_FIREBASE_AUTH_DOMAIN=...
     VITE_FIREBASE_PROJECT_ID=...
     VITE_FIREBASE_STORAGE_BUCKET=...
     VITE_FIREBASE_MESSAGING_SENDER_ID=...
     VITE_FIREBASE_APP_ID=...
     VITE_FIREBASE_MEASUREMENT_ID=...
     ```
4. **Inicia la app en modo desarrollo:**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

---

## Tecnologías Utilizadas

- **React 18**
- **TypeScript**
- **Vite**
- **Redux Toolkit**
- **Firebase** (Auth, Firestore)
- **react-big-calendar**
- **Moment.js**
- **ESLint**

---

Desarrollado como ejercicio práctico de integración de APIs y gestión de estado avanzado en React.
