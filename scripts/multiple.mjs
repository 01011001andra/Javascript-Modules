const name = "Yandra Muslim";

function sum(first, second) {
  return first + second;
}

class Person {
  constructor(saya) {
    this.saya = saya;
  }
  aku(saya) {
    console.info(`Nama aku adalah ${this.saya} alias ${saya}`);
  }
}
export { name, sum, Person };