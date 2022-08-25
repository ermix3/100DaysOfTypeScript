"use strict";
class Game1 {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
// Start Edit And Fix
class RPG extends Game1 {
    constructor(title, price, rate) {
        super(title, price);
        this.rate = rate;
    }
    getLocation() {
        return 'Location';
    }
    getDiscount() {
        return 'Discount';
    }
}
class Action extends Game1 {
    constructor(title, price, rate, company) {
        super(title, price);
        this.rate = rate;
        this.company = company;
    }
    getLocation() {
        return 'Location';
    }
    getDiscount() {
        return 'Discount';
    }
}
// End Edit And Fix
// Do Not Edit
let game_one = new RPG("Ys", 100, 10);
let game_two = new Action("Uncharted", 90, 15, "Sony");
console.log(game_one.title); // "Ys"
console.log(game_one.price); // 100
console.log(game_one.rate); // 10
console.log(game_one.getDiscount()); // "Discount"
console.log(game_one.getLocation()); // "Location"
console.log(game_two.title); // "Uncharted"
console.log(game_two.price); // 90
console.log(game_two.rate); // 15
console.log(game_two.company); // "Sony"
console.log(game_two.getDiscount()); // "Discount"
console.log(game_two.getLocation()); // "Location"
// Assignment 2
// Write Function Code Here
function showTypes(one, two, three) {
    if (one) {
        return `${typeof one} - Nothing - Nothing`;
    }
    else if (one && two) {
        return `${typeof one} - ${two} - Nothing`;
    }
    else if (three) {
        return `${typeof one} - ${two} - ${three}`;
    }
    else {
        return 'Nothing - Nothing - Nothing';
    }
}
// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes("String")); // String - Nothing - Nothing
console.log(showTypes("String", 100)); // String - 100 - Nothing
console.log(showTypes("String", 100, true)); // String - 100 - true
// Assignment 3
// Write Class Code Here
class Game2 {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    getDiscount(num) {
        return `Discount Is ${num}`;
    }
}
// Do Not Edit Here
let gameOne = new Game2("Ys", 100);
let gameTwo = new Game2(2064, 100); // There's A Game Called "2064"
console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
gameOne.getDiscount("50"); // "The Discount Is 50"
console.log(gameTwo.title); // 2064
console.log(gameTwo.price); // 100
gameTwo.getDiscount(80); // "The Discount Is 80"
//# sourceMappingURL=P-4.js.map