// const randomNumber = Math.floor(Math.random() * 100) + 1;
// let userAttemp = 0;

// function checkGuessNumber() {
//   let guessNumber = parseInt(prompt("Guess a number between 1 to 100"));

//   if (guessNumber > 100 || guessNumber < 1 || isNaN(guessNumber)) {
//     alert("Please enter a number between 1 to 100");
//     return checkGuessNumber();
//   }

//   userAttemp++;

//   if (guessNumber === randomNumber) {
//     document.write(`<h1>You are right! You took ${userAttemp} attempts to guessing the number</h1>`);
//   } else if (guessNumber > randomNumber) {
//     alert(`you are guessing Too high!`);
//     checkGuessNumber();
//   } else {
//     alert(`you are guessing Too low!`);
//     checkGuessNumber();
//   }
// }

// checkGuessNumber();

// --------------------------------------Using readline----------------------------------------------


const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const randomNumber = Math.floor(Math.random() * 100 + 1)
let userAttempt = 0;
function checkGuessNumber(){
    rl.question("Guess the number between 1 to 100 ", (userInput)=>{
        if(userInput >100 || userInput<1 || isNaN(userInput)){
            console.log("Your number must be in between 1 to 100");
            return checkGuessNumber();
        }

        userAttempt++;

         if( userInput > randomNumber){
         console.log("you are guessing to high!");
         checkGuessNumber()
        }else if(userInput < randomNumber){
         console.log("you are guessing to low!");
         checkGuessNumber()
         
        }else{
            console.log(`You got it right! you won the game in ${userAttempt} attempt`);
            rl.close()
        }
    })
}
checkGuessNumber()


         
        
            
            




