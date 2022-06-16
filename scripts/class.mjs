export class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello(name) {
    console.info(`Hello ${this.name} My Name is ${name}`);
  }
}