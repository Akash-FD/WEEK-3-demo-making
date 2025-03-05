// const arr = [1,2,4,9,5,3,4,7,2]

// const non_dubplicate = arr.filter((item,index)=>{ return arr.indexOf(item) === index })  // to return non-duplicate element
// const dubplicate = arr.filter((item,index)=>{ return arr.indexOf(item) !== index })      // to return duplicate element

// console.log(non_dubplicate);
// console.log(dubplicate);


const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

let arr = []
rl.on("line",(line)=>{
    let number = line.split(' ')
    number.map((item)=> arr.push(item))
    console.log(arr);
    rl.close()
})
rl.on('close', ()=>{
    const non_dubplicate = arr.filter((item,index)=>{ return arr.indexOf(item) === index })
    console.log(non_dubplicate);
    
})

 