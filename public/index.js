let myText = document.querySelector(".myText");
let text;
let socket = io.connect("localhost:3000");
socket.on("change", (text) => {
  myText.value = text;
});
myText.addEventListener("keyup", (e) => {
  text = e.target.value;
  console.log(text);
  socket.emit("change", text);
});
