import { sayHello, sum } from "nodejs-npm-library-nanda";
import {max, min} from "nodejs-npm-library-nanda/number";

console.info(sayHello("Nanda"));

// const numbers = [1, 2, 3, 4, 5];
console.info(sum([1, 2, 3, 4, 5]));

console.info(min(10, 20));
console.info(max(10, 20));