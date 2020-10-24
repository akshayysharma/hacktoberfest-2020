// get DOM elements


var currency_one = document.getElementById('currency-one');
var amount_one = document.getElementById('amount-one');

var currency_two = document.getElementById('currency-two');
var amount_two = document.getElementById('amount-two');

var swap = document.getElementById('swap');
var rate = document.getElementById('rate');



// function -> get exchange rates and change DOM
function calculate() {
    let c1 = currency_one.value;
    let c2 = currency_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${c1}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data.rates[c1]);
            console.log(data);
            let rate = data.rates[c2];

            document.getElementById('rate').innerText = `1 ${c1} = ${rate} ${c2}`

            amount_two.value = (amount_one.value * rate).toFixed(3)


        })


}

//       `https://open.exchangerate-api.com/v6/latest/${c1}`



// EventListners

currency_one.addEventListener('change', calculate);
amount_one.addEventListener('input', calculate);
currency_two.addEventListener('change', calculate);
amount_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value = temp;
    calculate();
});

// call calculate on load
calculate()

