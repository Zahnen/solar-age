export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  mercCalc() {
    let mercAge = Math.floor(this.age / .24);
    return mercAge;
  }

  venusCalc() {
    let venusAge = Math.floor(this.age / .62);
    return venusAge;
  }

  marsCalc() {
    let marsAge = Math.floor(this.age / 1.88);
    return marsAge;
  }

  jupCalc() {
    let jupAge = Math.floor(this.age / 11.86);
    return jupAge;
  }

  expectCalc() {
    let expAge = Math.floor(72.2 - this.age);
    return expAge;
  }
};