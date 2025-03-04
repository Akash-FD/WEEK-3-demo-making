const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

let array = ["stone", "paper", "scissor"]
let totalCount = 0;
let UserScore = 0;
let ComputerScore = 0;


function SPSgame(){
    let randomArray = array[Math.floor(Math.random()* array.length)]

    rl.question("Enter stone or paper or scissor ", (userInput)=>{
        let UserInput = userInput.toLocaleLowerCase()
        if(UserInput === "stone" || UserInput === "paper" || UserInput === "scissor"){
            
            if(UserInput === randomArray){
                console.log(randomArray);
                console.log("restart the game");
                return SPSgame()
            }
            else if(UserInput === "stone" && randomArray ==="scissor" || UserInput === "paper" && randomArray ==="stone" || UserInput === "scissor" && randomArray ==="paper"){
                UserScore++
                totalCount++
    
                if(UserScore<3){
                    console.log(`Computer generate ${randomArray}`);
                    console.log("you are won this game");
                    console.log(`your score = ${UserScore}  Computer score = ${ComputerScore}`);  
                    return SPSgame()
                }
                console.log(`you Won the game by Score ${UserScore} - ${ComputerScore}`);
                rl.close()
            }
            else{
                ComputerScore++
                totalCount++
                
                if(ComputerScore<3){
                    console.log(`Computer generate ${randomArray}`);
                    console.log("you are lost this game");  
                    console.log(`your score = ${UserScore}  Computer score = ${ComputerScore}`);
                    return SPSgame()
                 
                }
                console.log(`you Lost the game by Score ${UserScore} - ${ComputerScore}`);
                rl.close()
                
            }
        }
        else{
            console.log("please enter valid input");
            return SPSgame()
        }
               
    })
}
console.log("---------------------Best of 5 stone, paper, scissor game----------------------------");

SPSgame()


