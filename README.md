
# Sitio Web de Comercio Electrónico NayaSport

Este es un proyecto de un sitio web de comercio electrónico diseñado para vender una variedad de artículos deportivos, incluyendo uniformes personalizados y ropa deportiva. El proyecto está desarrollado utilizando React y Vite.

## Características

- Catálogo de productos: muestra una amplia gama de artículos deportivos disponibles para su compra, incluyendo uniformes personalizados y ropa deportiva.
- Detalles del producto: páginas de detalles dedicadas a cada producto con imágenes, descripciones, precios y opciones de personalización.
- Carrito de compras: permite a los usuarios agregar productos al carrito, ajustar cantidades, eliminar productos y proceder al pago.


## Tecnologías Utilizadas

- React: una biblioteca de JavaScript para construir interfaces de usuario.
- Vite: un entorno de desarrollo rápido para aplicaciones web modernas.
-  CSS: un marco de trabajo CSS de utilidad de primera clase para construir  diseños personalizados.


## Instalación y Uso

1. Clona este repositorio en tu máquina local utilizando el siguiente comando:

   ```bash
   git clone https://github.com/EstefaMH/E-commerceReact.git
   ```

2. Accede al directorio del proyecto:

   ```bash
   cd E-commerceReact

   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Para construir el proyecto para producción, ejecuta:

   ```bash
   npm run build
   ```

   Esto generará una versión optimizada del sitio web en el directorio `dist`.




##   Otros Aspectos

## Configuración de Firebase

Este proyecto utiliza Firestore de Firebase como base de datos en la nube. Para configurar tu proyecto para trabajar con Firebase, sigue estos pasos:

1. Crea un proyecto en Firebase desde el [Firebase Console](https://console.firebase.google.com/).
2. Obtener las credenciales para conectarse desde un sitio web 
3. Crea un archivo `.env` en la raíz de tu proyecto y establece las variables de entorno con tus credenciales de Firebase de la siguiente manera:
   VITE_API_KEY_FIREBASE= TuAPIKey
   VITE_AUTH_DOMAIN= TuDominioDeAuth
   VITE_PROJECT_ID= TuIDDeProyecto
   VITE_STORAGE_BUCKET= TuBucketDeAlmacenamiento
   VITE_MESSAGING_SENDER_ID= TuIDDeRemitenteDeMensajes
   VITE_APP_ID= TuIDDeApp
   VITE_MEASUREMENT_ID= TuIDDeMedición



