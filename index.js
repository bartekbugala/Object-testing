//// Kolory dla konsoli

// Codes for console colors
let colors = {
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m"
};
// Codes for console background colors
let bgColors = {
  black: "\x1b[40m",
  red: "\x1b[41m",
  green: "\x1b[42m",
  yellow: "\x1b[43m",
  blue: "\x1b[44m",
  magenta: "\x1b[45m",
  cyan: "\x1b[46m",
  white: "\x1b[47m"
};

function colorCode(color = "white", bgColor = "black") {
  if (!(color in colors)) {
    color = "white";
  }
  color = color || "white";
  bgColor = bgColor || "black";
  if (color == "black") {
    bgColor = "white";
  }
  let colorCodes = colors[color] + bgColors[bgColor];
  return colorCodes;
}

/////////////////////////////////

function Phone(brand, price, color) {
  this.brand = brand;
  this.price = price;
  this.color = color;
}

Phone.prototype.printInfo = function () {
  console.log(
    "Phone brand: " +
    this.brand +
    "\n" +
    "Price: " +
    this.price +
    " $\n" +
    "Color: " +
    colorCode(this.color) +
    this.color +
    colorCode("white", "black") +
    "\n"
  );
};

let samsungGalaxyS6 = new Phone("Samsung", 199, "red");
let iPhone6s = new Phone("Apple", 300, "yellow");
let onePlusOne = new Phone("HTC", 599, "blue");
let samsungGalaxyJ7 = new Phone("Samsung", 199, "magenta");
let dragonPower = new Phone("Huawei", 499, "golden");

samsungGalaxyS6.printInfo();
iPhone6s.printInfo();
onePlusOne.printInfo();
samsungGalaxyJ7.printInfo();
dragonPower.printInfo();

class UsedPhone extends Phone {
  constructor(serial, brand, price, color, stolen) {
    super(brand, price, color);
    this.serial = serial;
    this.stolen = stolen;
    this.printSerial = function () {
      console.log(
        "Serial: " +
        colorCode(this.color) +
        this.serial +
        colorCode("white", "black")
      );
    };
    this.printInfo = function () {
      console.log(
        "Used Phone brand: " +
        this.brand +
        "\n" +
        "Serial: " +
        colorCode(this.color) +
        this.serial +
        "\n" +
        colorCode("white", "black") +
        "Price: " +
        this.price +
        " $\n" +
        "Color: " +
        colorCode(this.color) +
        this.color +
        colorCode("white", "black") +
        "\n"
      );
    };
  }
}

let oldGalaxyS2 = new UsedPhone(1231231231, "Samsung", 24, "blue", true);
let Nokia3210 = new UsedPhone(22222, "Nokia", 1000, "black", false);

oldGalaxyS2.printInfo();
Nokia3210.printInfo();

Nokia3210.printSerial();
oldGalaxyS2.printSerial();