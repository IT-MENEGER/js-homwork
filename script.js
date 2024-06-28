var text = prompt("Matn kiriting");
var method = prompt("Metodni tanlang");

if (method === "" && text === "") {
  console.log("Hali text yoki method  kiritmadingiz");
} else if (method === "length") {
  console.log(text.length);
} else if (method === "charAt" || method === "charat") {
  var pos = Number(prompt("index qiymatini kiriting"));
  if (pos < text.length) {
    console.log(text.charAt(pos));
  } else {
    console.log("Kiritilgan index matn uzunligidan katta");
  }
} else if (method === "charCodeAt" || method === "charcodeat") {
  var pos = prompt("Symbol codini bilish uchun index kiriting");
  if (pos < text.length) {
    console.log("Tanlagan elementingiz kodi: " + text.charCodeAt(pos));
  } else {
    console.log("Kiritilgan index matn uzunligidan katta");
  }
} else if (method === "slice") {
  var startpos = prompt("Start qiymatini kiriting");
  var endpos = prompt("End qiymatini kiriting");
  if (startpos < text.length || endpos < text.length) {
    console.log(text.slice(startpos, endpos));
  } else {
    console.log("Kiritilgan index matn uzunligidan katta");
  }
} else if (method === "substr") {
  console.log("Bu methodimiz hozirgi vaqtda foydalanishga ruxsatlar kam");
} else if (method === "toUpperCase") {
  alert(
    "Bu methodimiz berilgan matn harflarini katta harflarga o'zgartirib beradi"
  );
  console.log(text.toUpperCase());
} else if (method === "toLowerCase") {
  alert(
    "Bu methodimiz berilgan matn harflarini kichik harflarga o'zgartirib beradi"
  );
  console.log(text.toLowerCase());
} else if (method === "concat") {
  alert(
    "Bu mathodimiz 2 o'zgaruvchidagi stringlarni bir biriga qo'shib berish uchun hizmat qiladi"
  );
  var text1 = prompt("Birinchi matnni kiriting");
  var text2 = prompt("Ikkinchi matnni kiriting");
  var text = text1.concat(text2);
  console.log(text);
} else if (method === "trim") {
  alert("Bu method berilgan matnning old orqa bo'sh joylarini olib tashlaydi.");
  var text = prompt(" Sinab ko'rish uchun bo'sh joy va matn kiriting");

  console.log("Bu birinchi holati: " + text);
  console.log("Bu ikkinchi holati: " + text.trim());
} else {
  console.log(
    "Siz noto'g'ri mathod yozdingiz yoki Biz hali bu methodni o'tmaganmiz:) "
  );
}

