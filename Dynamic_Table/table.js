busarray = [];

function display(displaydata) {
  let tabledata = "";

  displaydata.forEach(function (print, index) {
    let currentrow = `<tr>
        <td>${index + 1}</td>
        <td>${print.name}</td>
        <td>${print.source}</td>
        <td>${print.destination}</td>
        <td>${print.number}</td>
        <td>${print.capacity}</td>
        </tr>`;

    tabledata += currentrow;
  });

  document.getElementById("tbody").innerHTML = tabledata;
}

function popup(event) {
  let model = document.getElementsByClassName("model")[0];
  model.style.display = "block";
}

function hidemodel(event) {
  if (event.target.className == "model") {
    let model = document.getElementsByClassName("model")[0];
    model.style.display = "none";
  }
}

function addbus(event) {
  event.preventDefault();

  let name = document.getElementById("bname").value;
  let source = document.getElementById("bsource").value;
  let destination = document.getElementById("bdestination").value;
  let number = document.getElementById("bnumber").value;
  let capacity = document.getElementById("bcap").value;

  let bus = {};
  bus.name = name;
  bus.source = source;
  bus.destination = destination;
  bus.number = number;
  bus.capacity = capacity;

  busarray.push(bus);
  display(busarray);

  document.getElementById("bname").value = "";
  document.getElementById("bsource").value = "";
  document.getElementById("bdestination").value = "";
  document.getElementById("bnumber").value = "";
  document.getElementById("bcap").value = "";
}

function searchSource() {
  let searchValue = document.getElementById("searchSource").value;
  let newdata = busarray.filter(function (busfilter) {
    return busfilter.source.indexOf(searchValue);
  });
  display(newdata);
}

function searchDestination() {
  let searchValue = document.getElementById("searchSource").value;
  let newdata = busarray.filter(function (busfilter) {
    return busfilter.destination.indexOf(searchValue);
  });
  display(newdata);
}
