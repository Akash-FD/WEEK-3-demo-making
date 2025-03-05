const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

function palindrome(){
    rl.question("Give any string you want to revers " , (string)=>{

        let revers = string.split("").reverse().join("");
        if (revers === string) {
            console.log(`${revers} is a palindrome string`);
            rl.close()
        }else{
            console.log(`${revers} this string is not palindrome`);
            rl.close()
            
        }
    })
}
palindrome()
            
            
        
