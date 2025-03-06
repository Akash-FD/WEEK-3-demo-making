const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let alphabates = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function rot13() {

  rl.question("Enter a string you want to decode : ", (str) => {
    // let str = string.toUpperCase()

    let result = [];

    for (let i = 0; i < str.length; i++) {

      if (alphabates.includes(str.charAt(i))) {

        let a = str.charAt(i);
        let b = (alphabates.indexOf(a) + 1) % 26;
        let c = alphabates.charAt(b);
        result.push(c);

      }
      else {
        result.push(str.charAt(i));
      }

    }

    console.log(" ");
    console.log("Decodeing.... " + result.join(""));
    console.log(" ");

    rl.close();

  });

}

rot13();

// console.log((alphabates.indexOf("?" + 13)) % 26)
