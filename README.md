# Latency Tester (Node.js)

Este proyecto permite medir la **latencia promedio** entre un cliente UDP (Node.js) y un servidor UDP en C++.  
Es ideal para pruebas de comunicación de baja latencia en redes locales o configuraciones de tiempo real.

---

## 🚀 Requisitos

- **Node.js** v16 o superior
- Servidor UDP escuchando en la IP y puerto configurados

---

## 📁 Estructura del proyecto

```
udp_latency/
├── udp_client.js
├── README.md
```

---

## ⚙️ Instalación

1. Clona el repositorio o copia los archivos a tu máquina local.
2. Asegúrate de tener un **servidor UDP** ejecutándose, por ejemplo en C++:
   ```bash
   ./server
   ```

---

## 💻 Uso

Ejecuta el cliente UDP con Node.js:

```bash
node udp_client.js
```

Por defecto, el cliente:

- Envía **50 mensajes “ping”** al servidor.
- Mide la latencia individual de cada respuesta.
- Calcula el **promedio total** de latencia.

---

## 🧠 Explicación del código

### 1. Importación y configuración

```js
const dgram = require("dgram");
const { performance } = require("perf_hooks");

const HOST = "127.0.0.1";
const PORT = 41234;
const MESSAGE = Buffer.from("ping");
```

Se usa el módulo `dgram` de Node.js para crear un socket UDP y `performance.now()` para medir con precisión en milisegundos.

---

### 2. Resultados

Después de 50 solicitudes, se muestra:

- Latencia individual por mensaje.
- Latencia promedio total.

Ejemplo de salida:

```
Ping 1: 0.87 ms
Ping 2: 0.91 ms
...
Promedio: 0.94 ms
```

