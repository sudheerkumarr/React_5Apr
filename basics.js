var x = 0; // global
x = "Hello";

//es6 - keywords let and const introduced
const y = 100;
//y = 100; //assignment to constant variable.

let z = 100; //block level access

for (let i = 0; i < 5; i++) {
  console.log(i); // 0,1...4
}
//console.log(i); //error, ReferenceError: i is not defined
console.log();
// Press Ctrl+Alt+N - to run code
for (var i = 0; i < 5; i++) {
  console.log(i); // 0,1...4
}
console.log(i); // 5

// data types in ES6
/*
number
boolean
NaN
Object
function
undefined
*/

var n1 = 10;
console.log(typeof n1); // number
var b1 = true;
console.log(typeof b1); //boolean

function add(x, y) {
  return x + y;
}
console.log(typeof add); // function

console.log(typeof "Hello"); // string

console.log(typeof j); // undefined

// declaring array in es6
let numArr = [1, 2, 3, 4];
let colorArr = ["red", "orange", "blue"];

console.log(numArr[0]);
console.log(colorArr[1]);

// modify existing array elements
colorArr[0] = "White";
console.log(colorArr);

// add new elements in an array
colorArr.push("Green");
colorArr.push("Pink");

console.log(colorArr);

// delete last element in array
colorArr.pop();
console.log(colorArr);

// delete element based on index
colorArr.splice(1, 2);
console.log(colorArr);

console.log(typeof numArr); // object
console.log(typeof colorArr); // object

// declaring object
const person = {
  name: "Raj",
  age: 20,
  gender: "m",
  address: {
    dNo: 123,
    street: "abc colony",
    city: "Bangalore",
  },
  contactNos: [9999912345, 9999912346],
};

// Change property values
person.address.city = "Chennai";
console.log(person);

person.address["city"] = "Hyderabad";
console.log(person);

person.contactNos[1] = 9999912347;
console.log(person);

console.log(typeof person); // object

// accessing array elements
console.log(person.contactNos[1]);

// accessing object properties
console.log(person.name);
console.log(person.age);
console.log(person.gender);
console.log(person.address);
console.log(person.address.city);
console.log(person.address["city"]);

// arrow functions
// lowerCamelCase - variables & functions
// UpperCamelCase - classes
// lowercase - modules
// UPPERCASE - constants

function isEven(number) {
  //   if (number % 2 == 0) {
  //     return true;
  //   }
  //   return false;

  // ternary operator
  return number % 2 == 0 ? true : false;
}

console.log(isEven(10));

// Arrow Functions
// (number) => {
//   return number % 2 == 0 ? true : false;
// };
// isEven() equivalent arrow function
let even = (number) => (number % 2 == 0 ? true : false);
console.log(even(21));

// function
function greet() {
  console.log("Hello World");
}
greet();

// greet equivalent arrow function
const g = () => console.log("Hello World");
console.log(g);
g();

// add() equivalent arrow function
const a = (n1, n2) => n1 + n2;
console.log(a(10, 20));
console.log(a);

// default functions
function sub(n1 = 10, n2 = 10) {
  return n1 - n2;
}
console.log(sub(20, 10));
console.log(sub(30));
console.log(sub());
console.log();
// rest functions
function avg(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}
function avg(n1, n2, n3, n4) {
  return (n1 + n2 + n3 + n4) / 4;
}
function avg(n1, n2, n3, n4, n5) {
  return (n1 + n2 + n3 + n5) / 5;
}

function avg(...n) {
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    //sum = sum+n[i];
    sum += n[i];
  }
  return sum / n.length;
}

console.log(avg(10, 20));

// Destructuring
// Types
// Object Destructuring
// Array Destructuring

// Object Destructuring
const product = {
  id: 100,
  name: "redmi 9i",
  category: "mobile",
};
console.log();
// without destructuring
console.log(product.id);
console.log(product.name);
console.log(product.category);
console.log();

// with destructuring
const { id, name, category } = product;
console.log(id);
console.log(name);
console.log(category);

// Array Destructuring
const oldShapes = ["circle", "triangle"];
// without destructuring
console.log();
console.log(oldShapes[0]);
console.log(oldShapes[1]);

// with destructuring
console.log();
const [s1, s2] = oldShapes;
console.log(s1);
console.log(s2);

// Spread operator(...) - copy one array elements to another array
console.log();
console.log(oldShapes);
const newShapes1 = [...oldShapes];
const newShapes2 = [...oldShapes, "Sphere"];
const newShapes3 = ["square", ...oldShapes, "Sphere"];
const newShapes4 = ["cube", ...oldShapes];

console.log();
console.log(newShapes1);
console.log(newShapes2);
console.log(newShapes3);
console.log(newShapes4);

// classes, modules, import, export, map and filter
