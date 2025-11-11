import dgram from "dgram";
import { performance } from "perf_hooks";

const PORT = 9000;
const HOST = "127.0.0.1";
const MESSAGE = Buffer.from("ping");
const TOTAL_REQUESTS = 50;

const client = dgram.createSocket("udp4");

let count = 0;
let totalLatency = 0;

function sendPing() {
  let start = 0;

  client.send(MESSAGE, PORT, HOST, (err) => {
    start = performance.now();
    if (err) console.error("Error al enviar:", err);
  });

  client.once("message", (msg) => {
    const latency = performance.now() - start;
    totalLatency += latency;
    count++;
    console.log(`Ping ${count}: ${latency.toFixed(3)} ms`);

    if (count < TOTAL_REQUESTS) {
      sendPing();
    } else {
      const average = totalLatency / TOTAL_REQUESTS;
      console.log("\n📊 Resultados:");
      console.log(`Total de mensajes: ${TOTAL_REQUESTS}`);
      console.log(`Latencia promedio: ${average.toFixed(3)} ms`);
      client.close();
    }
  });
}

sendPing();
