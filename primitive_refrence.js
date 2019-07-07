// Primitives are copied by their value
let x = 10;

let y = x;

x = 20;


/*
 * Object Reference type
*/

let a = { value: 10 };

let b = a; // Address is copied which means a & b both are pointing to same memory location

a.value = 20;

console.log(b.value);


let number = 10;

function incNumber(number) {
  number++;
}

incNumber(number);

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj); // Pass object reference address

console.log('obj', obj);