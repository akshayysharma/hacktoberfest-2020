const movieSelect = document.getElementById("movie");
var ticketPrice = +movieSelect.value;

const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");

const count = document.getElementById("count");
const total = document.getElementById("total");

populateUI();

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice)
}

// update the text after each select
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const selectedSeatsCount = selectedSeats.length;
    count.innerHTML = selectedSeatsCount;
    total.innerHTML = selectedSeatsCount * ticketPrice;

    // console.log(selectedSeats);  // <-- see the selectedSeats , NodeList - NodeList [div.seat.selected]
    // storing to a local storage.
    // copy seats into array
    // map through that arr
    // return new arr indexes
    const seatIndex = [...selectedSeats].map(function (seat) {
        return [...seats].indexOf(seat)
    })

    localStorage.setItem('selectedSeats', JSON.stringify(seatIndex))

    // console.log(seatIndex);


}


function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex
    }



}

// select diffrent movie and its price to differ
movieSelect.addEventListener("change", (e) => {
    setMovieData(e.target.selectedIndex, e.target.value)
    ticketPrice = +e.target.value;
    updateSelectedCount();
});




container.addEventListener("click", (e) => {
    if (
        e.target.classList.contains("seat") &&
        !e.target.classList.contains("occupied")
    ) {
        e.target.classList.toggle("selected");
        updateSelectedCount();
    }
});

updateSelectedCount();
