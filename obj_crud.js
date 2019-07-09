// Constructor method

function Person(name, age) {
  this.name = name,
  this.age = age,
  this.hello = function () {
    console.log("Hello " + this.name);
    return true;
  }
}


// create object

const p = new Person("Pankaj Sharma", 20);

console.log(p.hello());

// Add property in an existing object
p.hobby = ['cricket', 'art', 'music', 'programming'];

let nick_name = 'nick-name';

p[nick_name] = 'Pankh';
console.log(p);


// delete an Object property

delete p[nick_name];
console.log("After delete", p);


// Enumerate on Objects

for (let key in p) {
  if(typeof p[key] != 'function') {
    console.log(key + ':' + p[key]);
  }
}

// Get all the properties not methods from an object

const keys = Object.keys(p);

console.log('keys', keys);


// Check property exist or not in a Object

if ('name' in p) {
  console.log("Your name is: " + p.name);
}



/**
 * Clone Object
 */

let person = {
  name: "Pankaj Sharma",
  age: 20,
  email: "pankaj@abc.com"
}

let employee = {};

// Clone Object.assign(to, from);

Object.assign(employee, person);

employee.id = 007;

console.log(employee); 
// { name: "Pankaj Sharma", age: 20, email: "pankaj@abc.com" }

console.log(person);
// { name: "Pankaj Sharma", age: 20, email: "pankaj@abc.com", id: 007 }


