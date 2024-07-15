// var text = prompt("array kiriting. Misol:(olma, anor)").split(", ");

// let format = prompt("Fotmatni kiriting: a-z, z-a, 0-9, 9-0");
// let res = document.getElementById("result");

// text.sort(sortarray);




// function sortarray() {
//     if (format === "a-z" && !isNaN) {
//         text.sort();
//         // res.innerHTML = text;
//     } else if (format === "z-a" && !isNaN) {
//         text.sort();
//         text.reverse();
//         // res.innerHTML = text;
//     } else if (format === "0-9" && isNaN) {
//         text.sort();
//         // res.innerHTML = text;
//     } else if (format === "9-0" && isNaN) {
//         text.sort();
//         text.reverse();
//         // res.innerHTML = text;
//     } else if (format === "" || text === "") {
//         res.innerHTML = "Xato, qayta urinib ko'ring.";
//     } else {
//         text.sort();
//     }
//     res.innerHTML = text;
// }




var arr = [1, 2, 3, 4, 5, 6, 9, 8, 6];

var firstIndex = arr.findIndex(element => element === 6);
if (firstIndex !== -1) {
  var secondIndex = arr.slice(firstIndex + 1).findIndex(element => element === 6);
  if (secondIndex !== -1) {
    secondIndex += firstIndex + 1; 
  }
}
 
var secondSix = secondIndex !== -1 ? arr[secondIndex] : undefined;
console.log(secondSix);