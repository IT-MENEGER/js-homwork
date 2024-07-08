// var text = prompt("Matn kiriting");
var text = "foydalanuvchi stalgan uzunlikdagi matin kirgizadi";
var letter = "U";
var a = text.split(" ");
console.log(a[2]);
var slicea = a[2].slice(0 ,1);
var reg = slicea.match(new RegExp(letter , "ig"));
console.log(slicea);
console.log(a[2].startsWith(reg));
