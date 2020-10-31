// Selecting DOm elements
let row1Food = document.querySelector('.row1-food');
let row1Price = document.querySelector('.row1-price');
let row1Mega = document.querySelector('.row1-mega');
let row2Food = document.querySelector('.row2-food');
let row2Price = document.querySelector('.row2-price');
let row2Mega = document.querySelector('.row2-mega');
let row3Food = document.querySelector('.row3-food');
let row3Price = document.querySelector('.row3-price');
let row3Mega = document.querySelector('.row3-mega');
let row4Food = document.querySelector('.row4-food');
let row4Price = document.querySelector('.row4-price');
let row4Mega = document.querySelector('.row4-mega');


// creating a class object for every type of food offered
class Food{
    constructor(name, price, mega){
        this.name = name;
        this.price = price;
        this.mega = mega;
    }
    favFood(){
        console.log(`this ${this.name} costs ${this.price}`);
    }
}

// Instantiating the class
const burger = new Food("burger", 10, 18);
const hotdog = new Food("Hotdog", 12, 20);
const chickenAndChips = new Food("Chicken And Chips", 13, 25);
const fishAndChips = new Food("Fish And Chips", 15, 30);

// adding data to the table
row1Food.textContent = burger.name;
row1Price.textContent = `$ ${burger.price}`;
row1Mega.textContent = `$ ${burger.mega}`;

row2Food.textContent = hotdog.name;
row2Price.textContent = `$ ${hotdog.price}`;
row2Mega.textContent = `$ ${hotdog.mega}`;

row3Food.textContent = chickenAndChips.name;
row3Price.textContent = `$ ${chickenAndChips.price}`;
row3Mega.textContent = `$ ${chickenAndChips.mega}`;

row4Food.textContent = fishAndChips.name;
row4Price.textContent = `$ ${fishAndChips.price}`;
row4Mega.textContent = `$ ${fishAndChips.mega}`;







