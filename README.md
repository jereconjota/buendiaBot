# Bot de discord (webhook)
### Servidor node para enviar mensajes a discord usando webhooks

---

## Instalación

```bash
npm install
```

## Variables de entorno

```env
WEBHOOK_ID=123456789012345678
WEBHOOK_TOKEN=your-token-goes-here

PAYLOAD_CONTENT="Este es el cuerpo del mensaje"
PAYLOAD_USERNAME=NombreDelBot
PAYLOAD_AVATAR_URL=https://i.postimg.cc/3R4jbs3t/IMG-0834.jpg

```

## Uso

```bash
node index.js
```

---

## Funcionamiento

El bot se encarga de enviar mensajes a un canal de discord usando webhooks. Para ello se debe crear un webhook en el servidor de discord que administramos, especificar el canal a cual se enviara el mensaje y luego copiar el link para obtener el id y el token del webhook. Estos datos se deben agregar como variables de entorno en el archivo .env.

El bot se encarga de enviar un mensaje con el contenido especificado en la variable PAYLOAD_CONTENT, el nombre del bot se especifica en la variable PAYLOAD_USERNAME y la imagen del bot se especifica en la variable PAYLOAD_AVATAR_URL.

Especificar en la linea 48 del archivo index.js el intervalo de tiempo en el cual se enviara el mensaje. Por ejemplo:

```js
const job = nodeCron.schedule('0 30 11 18 *', sendToDiscord);
```

En este ejemplo el mensaje se enviara todos los dias a las 11:30 am del 18 de cada mes.