// import { a, b } from './app';
import test from './app';

class Animal {
  static makeSound() {
    console.log('bow wow');
  }
}

// something commented

const animal = new Animal();

animal.makeSound();

const sum = (n1, n2) => n1 + n2;

console.log(sum(test.a, test.b));
