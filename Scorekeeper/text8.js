var button1 = document.querySelector("#counter1");
var p1s = document.querySelector("#score1");
var score1 = 0;
var button2 = document.querySelector("#counter2");
var p2s = document.querySelector("#score2");
var score2 = 0;
var reset = document.querySelector("#reset");

var winner = document.querySelector("#winner");
button1.addEventListener("click", function () {
  var limit = document.querySelector("#limit").value;
  score1++;
  p1s.textContent = score1;
  if (score1 == limit || (score1 > score2 && score1 > limit)) {
    p1s.classList.add("green");
    button1.setAttribute("disabled", "true");
    button2.setAttribute("disabled", "true");
  }
  printWinner();
});
button2.addEventListener("click", function () {
  var limit = document.querySelector("#limit").value;
  score2++;
  p2s.textContent = score2;
  if (score2 == limit || (score2 > score1 && score2 > limit)) {
    p2s.classList.add("green");
    button1.setAttribute("disabled", "true");
    button2.setAttribute("disabled", "true");
  }
  printWinner();
});
reset.addEventListener("click", function () {
  button1.removeAttribute("disabled", "true");
  button2.removeAttribute("disabled", "true");
  p1s.classList.remove("green");
  p2s.classList.remove("green");
  score1 = 0;
  score2 = 0;
  p1s.textContent = score1;
  p2s.textContent = score2;
  document.querySelector("#limit").value = 5;
  winner.textContent = "";
});
function printWinner() {
  if (score1 >> score2) {
    winner.textContent = "Player1";
  } else if (score2 >> score1) {
    winner.textContent = "Player2";
  } else {
    winner.textContent = "Tie";
  }
}
