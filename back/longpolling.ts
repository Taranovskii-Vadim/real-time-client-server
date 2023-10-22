import express, { json } from "express";
import events from "events";
import cors from "cors";

const PORT = 3001;
const ENDPOINT = "/api/messages";
const EMITTER_NAME = "newMessage";

const server = express();
const emitter = new events.EventEmitter();

server.use(json());
server.use(cors());

server.get(ENDPOINT, (req, res) => {
  emitter.once(EMITTER_NAME, (message: string) => {
    res.json(message);
  });
});

server.post(ENDPOINT, (req, res) => {
  emitter.emit(EMITTER_NAME, req.body.message as string);

  res.status(201).json();
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
