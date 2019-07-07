// Define properties
const circle = {
    radius: 3.1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log("Draw here");
    }
};

circle.draw();

// Create Object property with factory methods

function createCircle(radius) {
    return {
        // radius: 3.1, ES6 feature If key and value are same then we can write as shown below
        radius,
        draw: function() {
            console.log("Draw with factory");
        }
    };   
}

const myCircle = createCircle(3.5);

console.log(myCircle);

// Create Circle Object using constructor * first letter should be capitalize
function Person(name, age) {
    console.log('this', this);
    this.name = name,
    this.age = age,
    this.sayHello = function() {
        console.log("Hello "+this.name);
    }
}

// Create Object from constructor
const p = new Person("Starboy", 20);
const p1 = new Person("Pankaj Sharma", 20);

console.log(p1.sayHello());