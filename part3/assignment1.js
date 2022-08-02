const message = document.querySelector(".welcome"); //getElementsByClassName 不行
message.addEventListener("click", () => {
  message.innerHTML = "<h1>Hello World!</h1>";
});
