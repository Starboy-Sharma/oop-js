// Soptwatch in JS 😊
function Soptwatch() {

   let startTime, endTime, running, duration = 0;

   this.start = function () {
      if(running)
        throw new Error("Stop watch is already runing");

      running = true;

      startTime = new Date();
   };

   this.stop = function () {
    
      if(!running)
        throw new Error("Stop watch is not runing");

      running = false;

      endTime = new Date();

      const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
      duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };


  // Getter & Setters
  Object.defineProperty(this, 'duration', {
    get: function() { return duration; }
  });
}


// create our Stopwatch object
const SW = new Soptwatch();