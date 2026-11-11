VALERINA AI — PROYECTO PARA PUBLICAR

Este proyecto incluye:
- Chat en español con OpenAI Responses API.
- Generación de imágenes con GPT Image.
- Diseño adaptable a celulares.
- Preparación para desplegar en Render mediante render.yaml.
Video y música todavía no están conectados.

PUBLICAR DESDE ANDROID (GUÍA GENERAL)
1. Descarga y extrae el ZIP en tu celular.
2. Crea un repositorio en GitHub y sube los archivos del proyecto conservando la carpeta public.
3. En Render, crea un Web Service y conecta ese repositorio.
4. Build Command: npm install
5. Start Command: npm start
6. En Environment, agrega OPENAI_API_KEY como variable secreta.
7. Despliega. Render te dará una dirección pública *.onrender.com.

CLAVE API
Crea una clave en https://platform.openai.com/api-keys.
No pegues la clave en el HTML, en GitHub ni en mensajes. Agrégala solamente como variable secreta
OPENAI_API_KEY en Render. La API se factura por separado de ChatGPT; revisa límites y precios.

DETALLES
Chat configurado con gpt-5.5.
Imágenes configuradas con gpt-image-2.5-flare.
El acceso a modelos puede depender de la cuenta y de la verificación de la organización.
La instancia gratuita de Render puede dormirse tras inactividad y tardar en arrancar de nuevo.

Documentación:
https://developers.openai.com/api/docs/guides/image-generation
https://render.com/docs/deploy-node-express-app
https://render.com/docs/configure-environment-variables
