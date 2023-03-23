# BuendiaBot (discord)
### Node app para enviar mensajes a discord usando webhooks

---

## Instalación

```bash
npm install
```

## Crear un webhook en tu servidor de discord


1. Entra a tu servidor de discord
2. Entra a la configuración del servidor
3. Selecciona la pestaña de integraciones
4. Selecciona la opción de webhooks
5. Selecciona la opción de crear un webhook
6. Selecciona el canal al cual se enviara el mensaje
7. Copia el link del webhook

El link del webhook tiene el siguiente formato:

```bash
https://discord.com/api/webhooks/xxxxxxxxxxxxxxxxxxxx/yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
```

Donde:

- xxxxxxxxxxxxxxxxxxxx es el id del webhook

- yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy es el token del webhook


## Variables de entorno

hacer una copia del archivo .env.example y renombrarlo a .env

```bash
cp .env.example .env
```

Podes editar las variables de entorno con los datos de tu webhook, el nombre del bot y la imagen del bot.

__Esta configurado para mandar un mensaje lunes a viernes a las 9am.__

Podes agregar los webhooks de los canales que quieras, solo tenes que agregar una variable mas con el nombre del canal y el valor del webhook, y luego en el archivo webhook.js agregar el webhook y exportarlo.

## Contenido de los mensajes

El contenido de los mensajes se especifica en el archivo messages.js

Es un mensaje y un gif por dia habil (lunes a viernes)


## Uso

```bash
node index.js
```

---

