let express = require("express");
let App = express();
App.use(express.static("public"));

let server = App.listen(3000);
let socket = require("socket.io");
let io = socket(server);
const onConnection = (socket) => {
  console.log("the socket is running");
  socket.on("change", (text) => {
    socket.broadcast.emit("change", text);
    console.log(text);
  });
};

io.on("connection", onConnection);
