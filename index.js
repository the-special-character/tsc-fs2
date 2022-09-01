import { a, b } from './app';

class Animal{
    makesound() {
        console.log("bow wow");
    }
}

const animal = new Animal();

animal.makesound();

const sum = (n1, n2) => n1 + n2;

console.log(sum(a, b));

// commented
