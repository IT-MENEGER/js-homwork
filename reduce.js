let myreduce =  function(arr, cb, initialValue) {
  let res = initialValue;
  for (let i = 0; i < arr.length; i++) {
    res = cb(res, arr[i], i, arr);
  }

  return res;
}


let num = [1, 34, 23, 45, 53];
let resul = myreduce(
  num,
  (acc, currentvalue, i, arr) => {
    acc.push([currentvalue, arr[i + 1]]);
    return acc;
  },
  []
  
);
console.log(resul);
