class Person {
  constructor(fistName, lastName) {
    this.fistName = fistName;
    this.lastName = lastName;
  }
  getFullName() {
    return this.fistName + " " + this.lastName;
  }
}

let p1 = new Person("Home", "Joe");
let p2 = new Person("Rme", "Joe");

console.log(p1.getFullName());
console.log(p2.getFullName());
