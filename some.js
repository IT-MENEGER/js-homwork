let result = document.getElementById("result");
function somefunction(cb, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}
const num = [1, -2, 3, 4, 5, 6, 7, 8, 9, 10];
const res = somefunction((number) => number * 2 <= 0, num);

if (res === true) result.innerHTML = "true";
 else result.innerHTML = "false";

