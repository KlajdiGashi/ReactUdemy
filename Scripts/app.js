function greetUser() {
  console.log("Hello!");
}

function greetUserWithMessage(userName, userMessage) {
  // console.log("Hello: " + userName + " " + userMessage);

  return "Hi i am: " + userName + " " + userMessage;
}

greetUser();

greetUserWithMessage("Klajdi", "How are you!");

function combine(a, b, c) {
  var result = (a * b) / c;

  return result;
}

const abc = combine(22, 34, 4);
console.log(abc);

export default (userName, message) => {
  return userName + message;
};

(userName) => {
  console.log(userName);
};

(number) => number * 3;

(number) => ({
  age: number,
}); // this is the correct way to return an object in javascript.

const userName = "Max";
const userAge = 34;

const user = {
  name: "Max",
  age: 34,
  greet() {
    console.log("Hello!");
    console.log(this.age);
    console.log(this.name);
  },
};

console.log(user);
console.log(user.age);
user.greet();

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hi!");
  }
}

const user1 = new User("Manuel", 35);

console.log(user1);
user1.greet();
/* let userMessage = "Hello World!";

userMessage = "New Value";

console.log(userMessage);
console.log(userMessage);

console.log(10 / 5);
console.log(10 + 5);
console.log("Hello" + " World"); // Concat
console.log(10 === 5);
console.log(10 === 10);
console.log(10 <= 10);

if (10 === 10) {
  console.log("Works");
}


//import { apiKey } from "./util.js"; 
import apiKey from "./util.js"
 import { otherExample, otherExample1 } from "./util.js";

import * as util from "./util.js"

import {apiKey as content} from "./util.js"

console.log(util.apiKey);

console.log(apiKey);

console.log(content);
console.log(otherExample);
console.log(otherExample1);

*/
