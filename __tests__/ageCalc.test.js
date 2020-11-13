import { TestScheduler } from 'jest';
import User from '../src/ageCalc.js';

describe('User Age Calculation', () => {

  let user;

  beforeEach(() => {
    user = new User ("Zahnen", 28);
  });

  test('should correctly create a user object with name and age properties', () => {
    expect(user.name).toEqual("Zahnen");
    expect(user.age).toEqual(28);
  });
});















/*
Describe: User Constructor
Test: "Constructor should create a user object with name and age properties"
Expect: (user.name).toEqual("Zahnen")
Expect: (user.age).toEqual(28)

Describe: mercuryCalc
Test: "It should convert the user's age from earth years to Mercury years and return the result"
Expect: ((user.age).mercCalc).toEqual(116.66)

Describe: venusCalc
Test: "It should convert the user's age from earth years to Mercury years and return the result"
Expect: ((user.age).venusCalc).toEqual(45.16)

Describe: marsCalc
Test: "It should convert the user's age from earth years to Mercury years and return the result"
Expect: ((user.age).marsCalc).toEqual(14.89)

Describe: jupiterCalc
Test: "It should convert the user's age from earth years to Mercury years and return the result"
Expect: ((user.age).jupiterCalc).toEqual(2.36)

Describe: expectCalc
Test: "It should determine life expectancy by subtracting user age from 72.2 and return the result"
Expect: ((user.age).expectCalc).toEqual(44.2)

Test: "It should display negative numbers as positive numbers if user age is greater than life expectancy and return the result"
Expect: ((user.age = 80).expectCalc).toEqual(7.8)
*/