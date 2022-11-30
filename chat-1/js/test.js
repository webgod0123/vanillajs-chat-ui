var chat_history = document.getElementById("chatHistory");
var chat_input = document.getElementById("chatInput");
var live_chat = document.getElementById("liveChat");
var chat_submit = document.getElementById('chatSubmit');

function display_message(msg, is_new) {
  var new_message = is_new ? "new" : "";
  var avatar = "<img class='avatar' src='img/" + msg.from + ".png''>";
  var message =
    "<div class='chat-message-content'><div class='chat-message-time'>" +
    format_time(msg.datetime) +
    "</div><div class='chat-message'>" +
    msg.message +
    "</div></div>";
  var message_content =
    "<div class='chat-message-box " +
    msg.from +
    " " +
    new_message +
    "'>" +
    avatar +
    message +
    "</div>";

  var message_box = document.createElement("div");
  message_box.innerHTML = message_content;
  return message_box;
}

function type_message(e) {
  var keyCode = e.keyCode;
  var msg = e.target.value;
  if(!msg) chat_submit.setAttribute('disabled', true);
  else chat_submit.removeAttribute('disabled');
  if (keyCode == 13) send_message();
}

function send_message() {
  var msg = chat_input.value.trim();
  if (!msg) return;
  chat.sendChat(msg);
  chat_input.value = "";
  chat_submit.setAttribute('disabled', true);
}

function format_time(datetime) {
  var time = new Date(datetime);
  var new_time =
    [time.getMonth() + 1, time.getDate(), time.getFullYear()].join("/") +
    " " +
    [time.getHours(), time.getMinutes(), time.getSeconds()].join(":");

  return new_time;
}
