const express = require("express");
const logger = require("morgan");

const cors = require("cors");

const { createServer } = require("http");

const { Server } = require("socket.io");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to AP Chat. Here we don't know how to do things, but we do anyway.",
  });
});

const chat = createServer(app);
const io = new Server(chat, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("chat server up i guess");
  console.log("also user connected");

  socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });

  socket.on("message", (data) => {
    console.log(data);
  });

  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = { chat };
