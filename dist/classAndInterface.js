"use strict";
// interface with function ====================================>>>>
const tambah = (x, y) => x + y;
const kurang = (x, y) => x - y;
const kali = (x, y) => x * y;
const bagi = (x, y) => x / y;
console.log(tambah(10, 2));
console.log(kurang(10, 2));
console.log(kali(10, 2));
console.log(bagi(10, 2));
// class ====================================>>>>
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now register`;
    }
}
const gerry = new Person(1, "gerry");
const pratama = new Person(2, "Pratama");
console.log(gerry);
console.log(pratama);
// subclass ====================================>>>>
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "gerry", "developer");
console.log(emp);
