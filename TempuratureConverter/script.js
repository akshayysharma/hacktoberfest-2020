function CtoFconverter(temp) {
  document.querySelector(".fahrenheit").innerHTML = (temp - 32) / 1.8;
}

function FtoCconverter(temp) {
  document.querySelector(".celcius").innerHTML = temp * 1.8 + 32;
}
