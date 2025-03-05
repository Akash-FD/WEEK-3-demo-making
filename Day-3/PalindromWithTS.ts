// const arr :number[] = [1,2,4,9,5,3,4,7,2]

// const non_dubplicate : number[] = arr.filter((item,index)=>{ return arr.indexOf(item) === index })  // to return non-duplicate element
// const dubplicate : number[] = arr.filter((item,index)=>{ return arr.indexOf(item) !== index })      // to return duplicate element

// console.log(non_dubplicate);
// console.log(dubplicate);

import * as readline from 'readline'
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

function palindrome(str:string){
     rl.question("Give any string you want to revers " , (str)=>{

        let revers: string = str.split("").reverse().join("");
        if (revers === str) {
            console.log(`${revers} is a palindrome string`);
            rl.close()
        }else{
            console.log(`${revers} this string is not palindrome`);
            rl.close()
            
        }
    })
}
palindrome("nayan")