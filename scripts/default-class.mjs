export default class {
  constructor(name) {
    this.name = name
  }
  sayHello(name) {
    console.info(`Hello ${name} Myname is ${this.name} from default export`);
  }
}