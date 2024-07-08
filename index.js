var text = "Matn kiriting iltimos";
// var text = prompt("Istalgancha matn kiriting");
var letter = prompt(
  "uchinchi so'zni birinchi harfni tekshirish uchun harfni kiriting"
);
var a = text.split(" ");
console.log(a[2]);

var reg = a[2].match(new RegExp(letter, "ig"));
console.log(reg);

console.log(a[2].startsWith(reg));
// if (letter === reg) {
//   var a = text.split(" ");
//   // console.log(a[2]);
//   console.log(reg);
//   var slicea = a[2].slice(0, 1);
//   var reg = slicea.match(new RegExp(letter, "ig"));
//   console.log(slicea);
//   console.log(a[2].startsWith(reg));
// } else {
//   console.log("Kiritgan harf uchinchi so'zning birinchi harfi emas!");
// }



