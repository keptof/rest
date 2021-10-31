const AVERAGE_SPEED = 100;
const MIN_FUEL_VALUE = 10;

class Car {
    constructor(name, model, year, color,
        maxSpeed, fuelCapacity, fuelConsumption) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.fuelCapacity = fuelCapacity;
        this.fuelConsumption = fuelConsumption;
    }

    get fullName() {
        return `${this.name} ${this.model}`;
    }

    get age() {
        return new Date().getFullYear() - this.year;
    }

    changeColor = function (color) {
        if (color === this.color) {
            console.log(`Авто уже покрашено в ${color} цвет`);
        } else {
            console.log(`Ваша машина теперь ${color} цвета`);
            this.color = color;
            return this.color;
        }
    }

    calculateWay = function (kilometers, fuel) {
        const calFuelConsumption = kilometers / this.fuelCapacity;
        if (fuel < MIN_FUEL_VALUE) {
            console.log('Топлива осталось меньше 10л');
        } else if (calFuelConsumption > fuel) {
            console.log(`У вас не хватает топлива на поездку, рекомендую заправить еще ${calFuelConsumption - fuel} литров`);
        } else if (calFuelConsumption <= fuel) {
            console.log('Счастливого пути!');
        }
        console.log(`Среднее время пути:${kilometers / AVERAGE_SPEED} часа(ов)`);
    }
}

class Bmw extends Car {
    constructor(name, model, year, color,
        maxSpeed, fuelCapacity, fuelConsumption) {
        super(name, model, year, color,
            maxSpeed, fuelCapacity, fuelConsumption);
    }
    get infoAboutRoof() {
        return 'panoramicRoof';
    }
}

class Lexus extends Car {
    constructor(name, model, year, color,
        maxSpeed, fuelCapacity, fuelConsumption) {
        super(name, model, year, color,
            maxSpeed, fuelCapacity, fuelConsumption);
    }
    get infoAboutTemperatureControl() {
        return 'climate control';
    }
}

const bmwE36 = new Bmw('fields', 'e36', 1994, 'black', 240, 10, 60);

console.log(bmwE36);
console.log(bmwE36.fullName);
console.log(bmwE36.age);
bmwE36.changeColor('red');
bmwE36.calculateWay(2000, 20);
console.log(bmwE36.infoAboutRoof);

const lexusNx200 = new Lexus('fields2', 'nx200', 2005, 'red', 230, 10, 60);
