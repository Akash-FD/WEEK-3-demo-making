const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('What is your name? ', (item)=>{
  
        console.log(`Welcome ${item}`)
        readline.close()
    
        
})