function Smartphone(producer, model, screenSize, serial) {
    this.producer = producer;
    this.model = model;
    this.screenSize = screenSize;
    this.serial = serial;
    this.displayModel = function() {
        console.log('Current model: ' + this.model);
    }
}

Smartphone.prototype.displaySerial = function(){
    console.log('Current serial: ' + this.serial)
}

let myPhone = new Smartphone('Samsung','Galaxy j7',8,1234567890);
let yourPhone = new Smartphone('Samsung','Galaxy j9',7,222222222);

myPhone.displayModel(); 
myPhone.displaySerial();

console.log(myPhone.displayModel === yourPhone.displayModel); // display false - different new objects
console.log(myPhone.displaySerial === yourPhone.displaySerial); // display true - created once

yourPhone.displayModel();
yourPhone.displaySerial();
