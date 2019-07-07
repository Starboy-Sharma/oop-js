function Circle (radius) {

    this.radius = radius;
    this.draw = function () {
        console.log("Circle draw successfully");
    }
}

const another = new Circle(1);

/* Declare the function 'myFunc' */
function myFunc(theObject) {
    theObject.brand = "Toyota";
  }
  
  /*
   * Declare variable 'mycar';
   * create and initialize a new Object;
   * assign reference to it to 'mycar'
   */
  var mycar = {
    brand: "Honda",
    model: "Accord",
    year: 1998
  };
  
  /* Logs 'Honda' */
  console.log(mycar.brand);
  
  /* Pass object reference to the function */
  myFunc(mycar);
  
  /*
   * Logs 'Toyota' as the value of the 'brand' property
   * of the object, as changed to by the function.
   */
  console.log(mycar.brand);