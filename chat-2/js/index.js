var chatSubmit = document.getElementById("chatSubmit");
var chatInput = document.getElementById("chatInput");
var typing = document.getElementById("typing");
var timer;

function typeMessage(e) {
  var message = e.target.value;
  if (message) chatSubmit.removeAttribute("disabled");
  else chatSubmit.setAttribute("disabled", true);

  if (e.ctrlKey && e.keyCode == 13) {
    sendMessage();
  }

  clearTimeout(timer);
  timer = setTimeout(() => {
    typing.style.display = "none";
  }, 1000);
}

function handleKeyPress() {
  clearTimeout(timer);
  typing.style.display = "flex";
}

function sendMessage() {
  var message = chatInput.value.trim();

  if (message) {
    chat.sendChat(message);
    chatInput.value = "";
    chatSubmit.setAttribute("disabled", true);
  }
}

function displayMessage(args, newMessage) {
  var newMsg = newMessage ? "new-message" : "";
  var time = new Date(args.datetime);
  var newTime =
    [time.getMonth() + 1, time.getDate(), time.getFullYear()].join("/") +
    " " +
    [time.getHours(), time.getMinutes(), time.getSeconds()].join(":");

  var messageContainer = document.createElement("div");

  messageContainer.innerHTML =
    "<div class='message-container " +
    args.from +
    " " +
    newMsg +
    "'><div class='message'>" +
    args.message +
    "</div><div class='message-time'>" +
    args.from +
    ", " +
    newTime +
    "</div></div>";

  return messageContainer;
}
