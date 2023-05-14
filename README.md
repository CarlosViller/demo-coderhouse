# Clase demo Coderhouse

Ejemplo practico para clase demo coderhouse abordando el modulo “Consumiendo APIs”

En este ejemplo del uso del metodo `fetch` contra una REST API vamos a usar la pagina [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/) como ejemplo para mandar peticiones y recibir datos de la misma. Tambien veremos como configuar el CORS usando un server local!

Esta API expone varios endpoints para traer posts como tambien los comentarios de dichos posts y los usuarios que lo escribieron.

Para correr este ejemplo, seguimos los siguientes pasos:

1.  Clonar el repo
2. Entrar a la carpeta y ejecutar `npm install`
3. Abrir dos terminales, donde una ejecutara el cliente y otro el server
4. Ejecutar`npm run server` para iniciar el server (opcional)
5. Ejecutar `npm run dev` para iniciar el cliente

Tu cliente estara corriendo en [http://127.0.0.1:5173/](http://127.0.0.1:5173/) (esta informacion te la da tu terminal cuando corras el paso 5)