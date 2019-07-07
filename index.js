// Constructor method
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = {x:0, y:0};

  let computeOptimumLocation = function (factory) { // this method is a private property and circle object can not access
    // ...
    console.log("My scope is temporary");
  }

  this.draw = function() {


    computeOptimumLocation(3.2);
    console.log('draw');
  }
}


// create an object

const circle = new Circle(2.0);
circle.draw();

// Want to Know About Closure and Scopes Visit here: https://stackoverflow.com/questions/111102/how-do-javascript-closures-work