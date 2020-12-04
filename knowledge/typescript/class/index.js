var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.isAnimal = function (value) {
        return value instanceof Animal ? 'yes' : 'no';
    };
    Animal.prototype.run = function () {
        return this.name + " is running.";
    };
    return Animal;
}());
var shark = new Animal("shark");
console.log(shark.run()); // shark is running.
// 类的继承
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        return this.name + " is wang wang wang.";
    };
    return Dog;
}(Animal));
var dog = new Dog("tony");
console.log(dog.bark()); // tony is wang wang wang.
// 类的多态
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        var _this = _super.call(this, name) || this;
        console.log(_this.name);
        return _this;
    }
    Cat.prototype.run = function () {
        return "Miao," + _super.prototype.run.call(this);
    };
    return Cat;
}(Animal));
var cat = new Cat("tom");
console.log(cat.run()); // Miao,tom is running.
console.log(Animal.isAnimal(cat));
// 多接口实现
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.switchRadio = function () {
    };
    Car.prototype.checkBatteryStatus = function () {
        return false;
    };
    return Car;
}());
var Phone = /** @class */ (function () {
    function Phone() {
    }
    Phone.prototype.switchRadio = function () { };
    Phone.prototype.checkBatteryStatus = function () {
        return false;
    };
    return Phone;
}());
