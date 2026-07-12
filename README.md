# 🍔 BRASA | Proyecto React JS | Talento Tech 2026

Este proyecto forma parte de la Entrega Final del curso de React JS.

## 🚀 Características Principales

- 🍔 Catálogo dinámico de hamburguesas.
- 🔍 Vista de detalle individual de productos.
- ⚛️ Componentes reutilizables y estructura organizada.
- 🔗 Navegación SPA con React Router DOM.
- 📱 Diseño responsive adaptable a dispositivos móviles.
- 🎨 Interfaz moderna inspirada en aplicaciones de comida rápida.

## 🛠️ Tecnologías Utilizadas

- **React JS**: Librería principal.
- **Vite**: Entorno de desarrollo rápido.
- **React Router DOM**: Sistema de rutas.
- **CSS Modules**: Estilos modulares y organizados.
- **Bootstrap Icons**: Íconos.
- **JavaScript ES6+.**
- **Vercel**: Listo para desplegar en Vercel.

## 📦 Instalación y Configuración

### Requisitos

- Node.js
- Firebase (Firestore + Auth)
- ImgBB (para subir imagenes)

### Pasos de Instalación

1.  Clona el repositorio:

    ```bash
    git clone <url-del-repositorio>
    ```

2.  Ingresar a la carpeta del proyecto:

    ```bash
    cd BRASA
    ```

3.  Instala las dependencias necesarias:

    ```bash
    npm install
    ```

4.  Crear un archivo .env

# Firebase

    ```bash
    VITE_FIREBASE_API_KEY=tu_api_key
    VITE_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
    VITE_FIREBASE_PROJECT_ID=tu_proyecto
    VITE_FIREBASE_STORAGE_BUCKET=tu_proyecto.firebasestorage.app
    VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
    VITE_FIREBASE_APP_ID=tu_app_id
    ```
# ImgBB (para subir fotos)

    ```bash
    VITE_IMGBB_API_KEY=tu_imgbb_api_key
    ```

5.  Ejecutar el proyecto:

    ```bash
    npm run dev
    ```

    El servidor estará disponible en `http://localhost:5137`

## 📁 Estructura del Proyecto

    ```
    BRASA/
    │
    ├── public/
    │   ├── data/
    │   ├── icons/
    │   └── images/
    │
    ├── src/
    │   ├── assets/
    │   │
    │   ├── components/
    │   │   ├── aboutUs/
    │   │   ├── cart/
    │   │   ├── cartEmpty/
    │   │   ├── cartWidget/
    │   │   ├── categoryFilter/
    │   │   ├── cupones/
    │   │   ├── dashboard/
    │   │   ├── experience/
    │   │   ├── form/
    │   │   ├── hero/
    │   │   ├── item/
    │   │   ├── itemDetail/
    │   │   ├── layout/
    │   │   ├── login/
    │   │   ├── proctetedRoutes/
    │   │   ├── sectionTitle/
    │   │   └── staff/
    │   │
    │   ├── pages/
    │   │   ├── AboutPage.jsx
    │   │   ├── CartPage.jsx
    │   │   ├── CuponesPage.jsx
    │   │   ├── DashboardPage.jsx
    │   │   ├── DetailPage.jsx
    │   │   ├── MainPage.jsx
    │   │   ├── LoginPage.jsx
    │   │   ├── MenuPage.jsx
    │   │   └── ProductosPage.jsx
    │   │
    │   ├── router/
    │   │   └── routes.jsx
    │   │
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    │
    ├── package.json
    └── vite.config.js
    ```

## 📱 Rutas Principales

Ruta Descripción
/ Página principal
/menu Catálogo de hamburguesas
/menu/:id Detalle de producto
/carrito Carrito de compras
/nosotros Información de la empresa
/admin Panel de administrador
/admin/cupones CRUD cupones
/admin/productos CRUD productos
/login Inicio de sesión

## 🎨 Funcionalidades

- Visualización de hamburguesas más vendidas.
- Filtrado de productos.
- Diseño responsive con media queries.
- Sección “Sobre Nosotros”.
- Autenticacion de usuarios con Firebase.
- CRUD de productos y cupones.
- Carrito de compras con Context API.
- Renderizado condicional y rutas dinámicas.
- Carga de imagenes a ImgBB.

## 👨‍💻 Autor

Proyecto desarrollado por Juan para la Entrega Final de React JS.

## 📝 Licencia

Este proyecto fue realizado con fines educativos.
