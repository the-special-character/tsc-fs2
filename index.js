import { a, b } from './app';

class Animal {
  makesound() {
    console.log('bhow bhow');
  }
}

const animal = new Animal();
animal.makesound();

// something comented

const sum = (n1, n2) => n1 + n2;

console.log(sum(a, b));
