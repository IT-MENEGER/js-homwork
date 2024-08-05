let everyfunction = function(cb, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!cb(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

let arr = [1, 34, 23, 45, 53];

let result = everyfunction((num) => num > 0, arr);
console.log(result);


