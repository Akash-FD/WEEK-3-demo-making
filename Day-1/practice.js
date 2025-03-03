const fs = require('fs');
const process = require('process');
const args = process.argv.slice(2)
console.log(args);

// const file = 'file.txt';
// // const data = fs.readFileSync(file, 'utf8');

// try {
//     const data = fs.readFileSync(file, 'utf8');
//     console.log(data);
// } catch (err) {
//     console.error(err + 'Error');
// }
// try {
//     const data = fs.appendFileSync('file2.txt', 'world');
//     // data = fs.readFileSync('file2.txt', 'utf8');
//     console.log(data);
// } catch (err) {
//     console.error(err + 'Error');
// }
// // console.log(data);