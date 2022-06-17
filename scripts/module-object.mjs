const firstName = "Yandra";
const middleName = "D.";
const lastName = "Muslim";

function sayHello(name) {
  console.info(`Hello ${name}`);
}

class Person {
  constructor(name) {
    this.name = name;
  }
}

export { firstName, middleName, lastName, sayHello, Person };