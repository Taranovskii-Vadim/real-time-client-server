import ws from "ws";

const PORT = 3001;

const wss = new ws.Server({ port: PORT }, () => {
  console.log(`WS Server started on ${PORT}`);
});

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    wss.clients.forEach((client) => {
      client.send(message.toString());
    });
  });
});
