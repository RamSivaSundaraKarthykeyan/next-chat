const express = require("express");

const http = require("http");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`User is connected with id: ${socket.id}`);
});

server.listen(3001, () => {
  console.log("Server is running in port 3001");
});
ouygqe7gqe8g;
