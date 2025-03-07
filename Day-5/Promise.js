const ArrayOfPromises = [() => new Promise(resolve => setTimeout(() => resolve(4), 200)), 
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
    () => new Promise((resolve, reject) => setTimeout(() => reject('error'), 100))];

function checkPromise(arr) {
   let a = new Promise((resolve,reject) => {
    let newArray = new Array(arr.length);
    // let newArray = []
    let resolvedPromise = 0;
    let startTime = Date.now();

    arr.forEach((item,index) => {
        
      item().then((res) => {
          resolvedPromise++;
             newArray[index] = res;
        //   newArray.unshift(res);

        if (resolvedPromise === arr.length) {
          const endTime = Date.now();
          console.log({ t: endTime - startTime, resolved: newArray });
        }
        
      })
      .catch((error)=>{
        const endTime = Date.now()
        console.log({ t: endTime - startTime, rejected: error });
      })
    });
  });
  return a
}
checkPromise(ArrayOfPromises);
