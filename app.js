const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { createServer } = require("http");

const router = require("./routes/main");
const leadsRouter = require("./routes/leads");
const adminsRouter = require("./routes/admins");
const linksRouter = require("./routes/links");
const translationLeadsRouter = require("./routes/tr-leads");
const tokensRouter = require("./routes/tokens");
const { Server } = require("socket.io");

const app = express();
const chat = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const chatServer = createServer(chat);
const io = new Server(chatServer, {
  cors: {
    origin: "*",
  },
});
console.log("after io");

app.use(logger(formatsLogger));
chat.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
chat.use(express.json());

app.use("/", router);
app.use("/leads", leadsRouter);
app.use("/admins", adminsRouter);
app.use("/links", linksRouter);
app.use("/tr-leads", translationLeadsRouter);
app.use("/tokens", tokensRouter);

chat.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to AP Chat. Here we don't know how to do things, but we do anyway.",
  });
});

io.on("connect", (socket) => {
  console.log(socket);
  console.log("chat server up i guess");
  console.log("also user connected");
});

io.on("connection", (socket) => {
  console.log(socket);
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

chat.use((err, req, res, next) => {
  res.status(404).json({ message: err.message });
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = { app, chatServer };
