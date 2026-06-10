function Person(firstName, lastName) {
  if (!new.target) {
    return new Person(firstName, lastName);
  }

  console.log(new.target);

  ((this.firstName = firstName), (this.lastName = lastName));

  this.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

let person = new Person("john", "doe");
