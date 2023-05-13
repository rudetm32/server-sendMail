# sendMail
# Challenge Nodemailer, express and EJS

### Este desafío requiere de: Node.js, Express, Nodemailer and EJS

## Descripción del Challenge
En este challenge deberás crear una aplicación web utilizando: 
1. Node.js 
2. Express 
3. Nodemailer que permita enviar correos electrónicos con diferentes respuestas, según el resultado de una acción. 
4. Implementar un motor de plantillas EJS con Node.js, creando 4 modelos de plantillas EJS, cada una con una respuesta diferente: 
    - Dar la bienvenida y registrar exitosamente a un usuario.
    - Indicar que no se pudo registrar exitosamente al usuario.
    - Indicar que el pago se encuentra pendiente.
    - Indicar que el pago ha sido registrado exitosamente.

## Requisitos del Challenge
- La aplicación debe tener una ruta POST /send-email que permita enviar correos electrónicos con diferentes respuestas, según el resultado de una acción.

- Al enviar un correo electrónico, la aplicación debe utilizar Nodemailer para enviar un correo electrónico a la dirección de correo proporcionada en el cuerpo de la solicitud, utilizando el servicio SMTP de Gmail (o cualquier otro proveedor que prefieras).

- La aplicación debe utilizar plantillas EJS para personalizar el contenido del correo electrónico, dependiendo de la respuesta correspondiente. Deberás implementar 4 modelos de plantillas EJS diferentes, una para cada respuesta mencionada anteriormente.

- La aplicación debe ser capaz de recibir la información necesaria para personalizar el contenido de cada modelo de plantilla EJS, como el nombre del usuario, el estado de registro y el estado de pago, desde el cuerpo de la solicitud.

- La aplicación debe tener validaciones adecuadas para los campos de entrada, como la dirección de correo electrónico, y devolver mensajes de error adecuados si los campos no cumplen con los requisitos.

# Extras
- Implementa una página web que permita enviar correos electrónicos utilizando un formulario en lugar de enviar solicitudes a través de una herramienta como Postman.

- Agrega estilos CSS a las plantillas EJS para mejorar la apariencia de los correos electrónicos.

### Entregables
- Código fuente de la aplicación mediante enlace GitHub.
- Un archivo README que describa cómo instalar y ejecutar la aplicación.
- Capturas de pantalla que muestren la aplicación en funcionamiento (opcional).

¡Espero que disfrutes de este interesante challenge con Node.js, Express, Nodemailer y EJS!!!
