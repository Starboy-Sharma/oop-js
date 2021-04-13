// Factory functions are useful consider following situation

// Circle Object

const circle = {
  raidus: 5,
  location : {
    x: 1,
    y: 2
  },
  draw() {
    console.log('draw');
  }
}


// Now you need one more circle In such case you will going to copy circle object ❌ Bad Way
// Issue: In this case if our draw function has bug and as you copy this object from circle object you need to correct both object.
const circle1 = {
  raidus: 5,
  location : {
    x: 1,
    y: 2
  },
  draw() {
    console.log('draw');
  }
}


// You can create a factory function ✅
function createCircle (radius) {
   return {
     radius,
     draw() {
       console.log('draw')
     }
}
  
let circle1 = createCircle(5);
let circle2 = createCircle(7);  
  
