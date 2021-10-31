const AVERAGE_SPEED = 100;
const MIN_FUEL_VALUE = 10;

function Car(name, model, year, color,
    maxSpeed, fuelCapacity, fuelConsumption) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;
    this.fuelConsumption = fuelConsumption;
}

Car.prototype.getFullName = function () {
    return `${this.name} ${this.model}`;
}

Car.prototype.getAge = function () {
    return new Date().getFullYear() - this.year;
}

Car.prototype.changeColor = function (color) {
    if (color === this.color) {
        console.log(`Авто уже покрашено в ${color} цвет`);
    } else {
        console.log(`Ваша машина теперь ${color} цвета`);
        this.color = color;
        return this.color;

    }
}

Car.prototype.calculateWay = function (kilometers, fuel) {
    const calFuelConsumption = kilometers / this.fuelCapacity;
    if (fuel < MIN_FUEL_VALUE) {
        console.log('Топлива осталось меньше 10л');
    } else if (calFuelConsumption > fuel) {
        console.log(`У вас не хватает топлива на поезду,
        рекомендую заправить еще ${calFuelConsumption - fuel}литров`);
    } else if (calFuelConsumption <= fuel) {
        console.log('Счастливого пути!');
    }
    console.log(`Среднее время пути:${kilometers / AVERAGE_SPEED} часа(ов)`);
}

function Bmw(name, model, year, color,
    maxSpeed, fuelCapacity, fuelConsumption) {
    Car.apply(this, arguments);
    this.roof = 'panoramicRoof'; 
}

Bmw.prototype = Object.create(Car.prototype);
Bmw.prototype.constructor = Bmw;

const bmwE36 = new Bmw('fields', 'e36', 1994, 'black', 240, 10, 60);

console.log(bmwE36);
console.log(bmwE36.getFullName());
console.log(bmwE36.getAge());
bmwE36.changeColor('red');
bmwE36.calculateWay(2000, 20);
console.log(bmwE36.Roof);


function Lexus(name, model, year, color,
    maxSpeed, fuelCapacity, fuelConsumption) {
    Car.apply(this, arguments);
    this.temperatureControl = 'climate control';
}

Lexus.prototype = Object.create(Car.prototype);
Lexus.prototype.constructor = Lexus;

const lexusNx200 = new Lexus('fields2', 'nx200', 2005, 'red', 230, 10, 60);

console.log(lexusNx200);
console.log(lexusNx200.getFullName());
console.log(lexusNx200.getAge());
bmwE36.changeColor('black');
bmwE36.calculateWay(2000, 20);
console.log(lexusNx200.temperatureControl);