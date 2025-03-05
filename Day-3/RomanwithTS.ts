const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface demo {
    [key: string]: number;
}

function integerToRoman() {
  rl.question("Enter a number : ", (userInput:number) => {
    let userNumber:number = Number(userInput);

    const romanValues: demo = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };

    let RomanNumber:string = "";
    if (userNumber > 0) {
      for (const key in romanValues) {
        while (userNumber >= romanValues[key]) {
          RomanNumber = RomanNumber + key;
          userNumber = userNumber - romanValues[key];
        }
      }
      console.log(`The roman value of ${userInput} is ${RomanNumber}`);
      rl.close();
    }
     else if (userNumber === 0) {
      console.log("The roman value of 0 is not define ");
      rl.close();
    }
     else {
      console.log("you can not enter negetive value");
      rl.close();
    }
  });
}
integerToRoman();
