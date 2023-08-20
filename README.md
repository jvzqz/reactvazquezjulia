Proyecto de Coderhouse - Vázquez Julia 

Este es un proyecto final del curso React de Coderhouse, donde se construye una tienda online utilizando React, Firebase y las bibliotecas de Bootstrap.

Descripción

Este proyecto es una tienda en línea donde los usuarios pueden explorar productos, agregarlos al carrito y realizar órdenes de compra. Se utilizan tecnologías como React, Firebase para la autenticación y base de datos, así como Bootstrap para estilos y componentes.

Características

- Explorar y buscar productos en la tienda.
- Agregar productos al carrito de compras.
- Autenticación de usuarios utilizando Firebase Authentication.
- Gestión del carrito de compras.
- Realización de pedidos y confirmación.

Configuración

1. Clona el repositorio en tu máquina local.
2. Instala las dependencias usando npm install.

Configuración de Firebase

Este proyecto utiliza Firebase para la autenticación y la base de datos en tiempo real. Para configurar Firebase:

1. Crea un proyecto en Firebase.
2. Copia la configuración de Firebase (apiKey, authDomain, projectId, etc.) desde la consola de Firebase.
3. Crea un archivo .env en la raíz del proyecto y agrega las variables de entorno:

REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_auth_domain
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_APP_ID=your_app_id

Ejecución

- Ejecuta el proyecto usando npm start.
- Abre tu navegador en http://localhost:5173.

Dependencias

- React
- React Bootstrap
- Bootstrap Icons
- Firebase

