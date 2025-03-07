// let promise = ()=>new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         reject("reject..")
//     }, 1000);

// })
// console.log(promise);

// promise
// .then((res)=>{return console.log(res)})
// .catch((rej)=>{return console.log(rej)})

//  const newarry = new Array(ArrayOfPromises.length)
//  console.log(newarry);
//  console.log(newarry.push(1))

//--------------------------------------------

// let a = [()=>console.log('hello'), ()=>console.log('my'), ()=>console.log('self ak')]

// a.forEach((item, index)=>{
//     console.log(item);
// })

//     let promise1 = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             reject("reject..")

//         }, 1000);

//     })
//     let promise2 = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             reject("reject..")

//         }, 1500);

//     })
//     let promise3 = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             reject("reject..")

//         }, 2000);

//     })
//     console.log(promise1);
//     console.log(promise2);
//     console.log(promise3);

//     promise1.then((res)=>{return console.log(res)}).catch((rej)=>{return console.log(rej)})
//     promise2.then((res)=>{return console.log(res)}).catch((rej)=>{return console.log(rej)})
//     promise3.then((res)=>{return console.log(res)}).catch((rej)=>{return console.log(rej)})
// }

// function fn(){
//     let count = 0
//     function inner(){
//         for(let i = 0; i<=10; i++){

//             setTimeout(() => {
//                 count += 1
//                 console.log(count);

//             }, 1000*i);
//         }
//     }
//     inner()
// }
// fn()
// let a = Date.now();
// function fn() {
//   setTimeout(() => {
//     let b = Date.now();
//     console.log(b - a);
//   }, 2000);
// }
// fn();

// const ArrayOfPromises = [
//   () => new Promise((resolve) => setTimeout(() => resolve(4), 200)),
//   () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
//   () =>
//     new Promise((resolve, reject) => setTimeout(() => reject("error"), 100))
// ];

// function checkPromise(arr) {
//   new Promise((resolve, reject) => {
//     let newArray = new Array(arr.length);
//     let startTime = Date.now();
//     let resolvePromises = 0;
//     arr.forEach((item, index) => {
//       item()
//         .then((res) => {
//           newArray[index] = res;
//           resolvePromises++;
//           if (resolvePromises === arr.length) {
//             const endTime = Date.now();
//             console.log({ t: endTime - startTime, resolved: newArray });
//           }
//         })
//         .catch((error) => {
//           const endTime = Date.now();
//           console.log({ t: endTime - startTime, resolved: error });
//         });
//     });
//   });
// }
// checkPromise(ArrayOfPromises);

// const startTime = Date.now();

// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(4), 200)),
//   new Promise((resolve) => setTimeout(() => resolve(10), 150)),
//   new Promise((resolve, reject) => setTimeout(() => reject("error"), 100)),
// ])
//   .then((results) => {
//     const endTime = Date.now();
//     console.log({ t: endTime - startTime, resolved: results });
//   })
//   .catch((error) => {
//     const endTime = Date.now();
//     console.log({ t: endTime - startTime, resolved: error });
   
//   });

// let functionCalled = 0;
// const fibonacci = (n) => {
//   if (n <= 1) return 1;
//   functionCalled++;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// console.log(fibonacci(10)); // 89
// console.log(functionCalled); // 88


const square = (n) => {
    let result = 0;
 
    // Slow function
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            result += 1;
        }
    }
    return result;
}
 
console.log(square(100000));
console.log(square(100000));

// console.log(square(40));
// console.log(square(40));

// console.log(square(5));