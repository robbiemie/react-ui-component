class Animal {
  public name: string;
  static isAnimal (value: Animal) {
    return value instanceof Animal ? 'yes' : 'no'
  }
  constructor(name: string) {
    this.name = name
  }
  run () {
    return `${this.name} is running.`
  }
}

const shark = new Animal("shark")
console.log(shark.run()) // shark is running.
// 类的继承
class Dog extends Animal {
  bark () {
    return `${this.name} is wang wang wang.`
  }
}
const dog = new Dog("tony")
console.log(dog.bark()) // tony is wang wang wang.
// 类的多态
class Cat extends Animal {
  constructor(name: string) {
    super(name)
    console.log(this.name)
  }
  run () {
    return `Miao,` + super.run()
  }
}

const cat = new Cat("tom")

console.log(cat.run()) // Miao,tom is running.

console.log(Animal.isAnimal(cat))

// 类功能的抽象
interface Radio {
  switchRadio(trigger: boolean):void;
}

interface Battery {
  checkBatteryStatus():boolean;
}
// 多接口实现
class Car implements Radio,Battery{
  switchRadio() {
  }
  checkBatteryStatus() {
    return false
  }
}

// 接口的继承
interface RadioWithBattery extends Radio{
  checkBatteryStatus():boolean;
}
class Phone implements RadioWithBattery{
  switchRadio () {}
  checkBatteryStatus() {
    return false
  }
}