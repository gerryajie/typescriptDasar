// interface with function ====================================>>>>

interface MathFunc {
  (x: number, y: number): number;
}

const tambah: MathFunc = (x: number, y: number): number => x + y;
const kurang: MathFunc = (x: number, y: number): number => x - y;
const kali: MathFunc = (x: number, y: number): number => x * y;
const bagi: MathFunc = (x: number, y: number): number => x / y;

console.log(tambah(10, 2));
console.log(kurang(10, 2));
console.log(kali(10, 2));
console.log(bagi(10, 2));

interface Upikabu {
  id: number;
  name: string;
  register(): string;
}

// class ====================================>>>>

class Person implements Upikabu {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "gerry", "developer");
console.log(emp);
