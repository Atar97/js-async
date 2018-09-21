class Clock {
  constructor() {
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.printTime();
    setInterval(() => this._tick(), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    console.log(this.hours.toString() + ":" + this.minutes.toString() + ":" + this.seconds.toString()); 
    // Use console.log to print it.
  }

  _tick() {
    // 1. Increment the time by one second.
    this.seconds += 1;
    if (this.seconds === 60) {
      this.minutes += 1;
      this.seconds = 0;
    }
    if (this.minutes === 60) {
      this.hours += 1;
      this.minutes = 0;
    }
    if (this.hours === 24) {
      this.hours = 0;
    }
    // 2. Call printTime.
    this.printTime();
  }
}

// const clock = new Clock();


const readline = require('readline');

const adder = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    adder.question('Choose a number ', function(num) {
      sum += parseInt(num);
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  }
  if (numsLeft === 0) {
    completionCallback(sum);
    adder.close();
  }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

function askIfGreaterThan(el1, el2, callback) {
  adder.question(`Is ${el1} better than ${el2}?\n`, function(answer) {
    if (answer === 'y') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  let madeSwaps = madeAnySwaps;
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i+1], function(isBetterThan) {
      if (isBetterThan) {
        [arr[i+1], arr[i]] = [arr[i], arr[i+1]];
        madeSwaps = true;
      } 
      innerBubbleSortLoop(arr, i+1, madeSwaps, outerBubbleSortLoop);
      });
    }
    if (i === arr.length - 1) {
      outerBubbleSortLoop(madeSwaps);
  }
}


function absurdBubbleSort(arr, sortCompletionHollaback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionHollaback(arr);
      adder.close();
    }
  }
  outerBubbleSortLoop(true);
}

// const arr = [2,5,3,6];
// 
// absurdBubbleSort(arr, function() {
//   console.log(arr);
// });

adder.close();

Function.prototype.myBind = function(context) {
  return () => {
    this.apply(context);
  };
};


class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"



