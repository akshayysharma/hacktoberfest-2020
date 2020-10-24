var is_visible = false;

function see() {
  var input = document.getElementById("password");
  var see = document.getElementById("see");

  if (is_visible) {
    input.type = "password";
    is_visible = false;
    see.style.color = "gray";
  } else {
    input.type = "text";
    is_visible = true;
    see.style.color = "#262626";
  }
}

function check() {
  var input = document.getElementById("password").value;

  input = input.trim();
  document.getElementById("password").value = input;
  document.getElementById("count").innerText = "Length : " + input.length;
  if (input.length >= 5) {
    document.getElementById("check0").style.color = "green";
  } else {
    document.getElementById("check0").style.color = "tomato";
  }

  if (input.length <= 10) {
    document.getElementById("check1").style.color = "green";
  } else {
    document.getElementById("check1").style.color = "tomato";
  }

  if (input.match(/[0-9]/i)) {
    document.getElementById("check2").style.color = "green";
  } else {
    document.getElementById("check2").style.color = "tomato";
  }

  if (input.match(/[^A-Za-z0-9-' ']/i)) {
    document.getElementById("check3").style.color = "green";
  } else {
    document.getElementById("check3").style.color = "tomato";
  }

  if (input.match(" ")) {
    document.getElementById("check4").style.color = "tomato";
  } else {
    document.getElementById("check4").style.color = "green";
  }
}
