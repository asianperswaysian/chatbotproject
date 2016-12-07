

var fallBack = ["idk lol",  "you should know", "kk cool"]

function returnTime() {
  var now = new Date(Date.now());
  return now;
}

function myDivArea() {
  $("#myDivArea").prepend("This is the beginning!");
  $("#myDivArea").append("And finally, the end!");
}

var responses = {
  "what's your name?": "My name Kylie",
  "how old are you?": "I am ageless",
  "what time is it": "It is currently " + returnTime() + ".",
  "how are you": "I am well, thanks",
  "what's your favorite sport": "silly boy I'm too lazy for all that jazz",
  "wheres your parents": "well Steven jobs died so",
  "i like you": "oh thats nice",
  "how many eggs in the box Carol?": "like 42 idk i havent counted yet",
  "How are you feeling right now": "im feeling #blessed",
  "whats your favorite music": "rnb for life",
  "whats your favorite color": "white and gold son",

}

function speak() {
  // $("#chat-area").text($("#userInput").val()); <br>
  var question = document.getElementById("userInput").value
  question = question.toLowerCase()
  var answer = responses[question]

  if(answer == undefined) {
    var rand = Math.floor((Math.random() * fallBack.length));
    answer = fallBack[rand]
  }

   document.getElementById("chat-area").innerHTML += question + "<br>" + answer + "<br>"

}

document.addEventListener("keydown", function(e) {
  if(e.keyCode == 13) {
    speak()
  }

})
