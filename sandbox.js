// Create Object with literal
let bartek = {
    name: "Bartek Bugała",
    age: 38,
    isMarried: true,
    sayHello: function () {
        console.log('Hello World said ' + this.name)
    }
}

// method of object bartek
bartek.sayHello();


// Funkcja konstruująca - Klasa
function Creature(species, name, age) {
    this.species = species;
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        console.log('Hello World said ' + this.name)
    }
}

let marek = new Creature('human', 'Marek', 39);

marek.sayHello();

class Person extends Creature {
    constructor(name, age, isMarried) {
        super();
        this.species = 'human';
        this.name = name;
        this.age = age;
        this.isMarried = isMarried || false;
    }
}

let zosia = new Person('Zosia', 25, true);

let maja = new Person('Maja');

zosia.sayHello(); // returns Hello World said Zosia
console.log('species property of zosia: ' + zosia.species); // returns [human]
console.log(zosia.constructor); // returns [function: Person]
console.log(marek.constructor); // returns [function: Creature]

console.log('================');
console.log(zosia.constructor);

let mirka = {
    name: 'Mirka', age: '43', isMarried: false,
    set setMarriage(marriage) {
        this.isMarried = marriage
    },
    get getMarriage() {
        return this.isMarried
    }
}

mirka.setMarriage = true;

console.log('Married status of Mirka: ' + mirka.isMarried);
console.log('Getting Mirka\'s marriage status using getter: ' + mirka.getMarriage);

console.log('Constructor of mirka: '+mirka.constructor); // returns [function: Object]
console.log('Constructor of constructor of mirka: '+mirka.constructor.constructor); // returns [Function: Function]

maja.age = 22;

console.log(maja.age); // returns 22
console.log(maja.isMarried); // returns false


class Female extends Person {
    constructor(name, age, isMarried) {
        super();
        this.name = name;
        this.age = age;
        this.isMarried = isMarried || 'free';
    }
}

let miko = new Female('miko', 19);
console.log(miko.species); // returns human
