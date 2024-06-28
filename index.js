// bu ko'd matn so'zlarini o'zgartirish va qancha so'z va harf borligini tekshirish uchun.

var text = prompt("Matn kiriting");
var changetext = prompt ("Qaysi so'zni o'zgartirmoqchisiz");
var newword= prompt("O'zgartirmoqchi bo'lgan so'zni kiriting");
var changedtext = text.replace(changetext, newword);
console.log(changedtext);
var arr = changedtext.split(" ");
changedtext = changedtext.replace(/\s+/g, '');
console.log("Matndagi so'zlar soni: " + arr.length);
console.log("Matndagi harflar soni: " + changedtext.length);

