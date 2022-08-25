"use strict";
// Do Not Edit The Code Below
let User = {
    // Property 'country' is missing in type
    id: 100,
    username: 'Elzero',
    state: true,
    getName() {
        // 'getName' does not exist in type 'Member'
        return this.username;
    }
};
User.id = 200;
User.id = '200'; // Type 'string' is not assignable to type 'number'
User.state = false; // Cannot assign to 'state' because it is a read-only property
// Do Not Edit The Code Below
let client = {
    id: 100,
    username: 'Elzero',
    active: true,
    discount: 10,
    getPrice(price) {
        return price - this.discount;
    }
};
console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
let creature = {
    title: 'Superman',
    weight: 100,
    age: 500,
    canFly: true,
    bodyType: 'Iron',
    origin: 'Krypton'
};
// Assignment 4
// Create Class Here
class Player {
    constructor(name, type, level, status) {
        this.name = name;
        this.type = type;
        this.level = level;
        this.status = status;
    }
    details() {
        return `${this.status ? 'VIP' : ''} ${this.name}, Type Is ${this.type} Level Is ${this.level}`;
    }
}
// Do Not Edit The Code Below
let player01 = new Player('Osama', 'Mage', 90, true);
let player02 = new Player('Shady', 'Archer', '85', false);
let player03 = new Player('Amr', 'Fighter', 50, true);
let player04 = new Player('Mahmoud', 'Assassin', 77);
console.log(player01.details()); // VIP Osama, Type Is Mage Level Is 90
console.log(player02.details()); // Shady, Type Is Archer Level Is 85
console.log(player03.details()); // VIP Amr, Type Is Fighter Level Is 50
console.log(player04.details()); // Mahmoud, Type Is Assassin Level Is 77
// Assignment 5
class Shorten {
    constructor(id, username, title) {
        this.id = id;
        this.username = username;
        this.title = title;
    }
}
let tester = new Shorten(100, 'Elzero', 'Developer');
console.log(tester.id);
console.log(tester.username);
// Assignment 6
class Show {
    constructor(_title) {
        this._title = _title;
    }
    // getters & setters
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
}
let tester2 = new Show('Elzero');
console.log(tester2.title); // Property 'title' does not exist on type 'Show'
tester2.title = 'Osama'; // Property 'title' does not exist on type 'Show'
console.log(tester2.title); // Property 'title' does not exist on type 'Show'
// Create Your Class Here
class Player2 {
    constructor(id, title, level) {
        this.id = id;
        this.title = title;
        this.level = level;
    }
    logIn() {
        console.log('Log In');
    }
    logOut(msg) {
        console.log(msg);
    }
}
let player1 = new Player2(100, 'Elzero', 95);
console.log(player1.id); // 100
console.log(player1.title); // "Elzero"
console.log(player1.level); // 95
player1.logIn(); // Logged In
player1.logOut('Good Bye'); // Logged Out, Good Bye
//# sourceMappingURL=P-3.js.map