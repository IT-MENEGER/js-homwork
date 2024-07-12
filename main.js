
var fruits = ["olma", "anor", "o'rik", "shaftoli", "nok"];
var method = prompt("Method nomini kiriting").toLowerCase(); 

  if (method === "shift") {
    alert("Bu method arrayning boshidan malumot o'chiradi");
    console.log(fruits);
    fruits.shift();
    console.log(fruits);
  } else if ((method === "unshift")) {
    alert("Bu method arrayning boshidan malumot qo'shadi");
    fruits = ["olma", "anor", "o'rik", "shaftoli", "nok"];
    console.log(fruits);
    fruits.unshift("Apelsin");
    console.log("fruits.unshift('Apelsin')");
    console.log(fruits);
  } else if ((method === "pop")) {
    console.log("Bu method arrayning oxiridan malumot o'chiradi");
    console.log(fruits);
    fruits.pop();
    console.log("fruits.pop()");
    console.log(fruits);
  } else if ((method === "push")) {
    alert("Bu method arrayning oxiridan malumot kiritadi");
    console.log(fruits);
    fruits.push("Apelsin");
    console.log("fruits.push('Apelsin')");
    console.log(fruits);
  } else if ((method === "join")) {
    alert("Bu method arrayni stringga o'tkazib beradi.")
    console.log(fruits);
    fruits.join(", ");
    console.log(fruits);
  } else if ((method === "flat") ) {
    alert("Bu method arrayning ichkima-ich joylashganlarini bitta arrayga aylantirishi mumkin. Uning qiymati esa array ichidagi arranning nechtasini ochishini ko'rsatadi ");
    fruits = ["olma",[ "anor", ["o'rik", ["shaftoli"]]], "nok"];
    console.log(fruits);
    var index = Number(prompt("Nechta arrayni ochish kerak"));
    fruits.flat(input);
    console.log(fruits);
  } else if ((method === "slice")) {
    alert("bu method arrayning istalgan joyidan kesib olib o'rniga boshqa malumot kiritishimiz mumkin");
    console.log(fruits);
    var index1 = prompt("qayerdan o'chirish kerak:(index kiriting)");
    var index2 = prompt("Qayergacha o'chirish kerak:(index kiriting)");
    fruits.slice(index1, index2);
    console.log(fruits);
  } else if ((method === "splice")) {
    alert("Bu method arrayning biron qismini kesib olish uchun hizmat qiladi, ammo arrayning asosiy malumotlar bazasini o'zgartirmaydi");
    console.log(fruits);
    var index1 = prompt("qayerdan o'chirish kerak:(index kiriting)");
    var index2 = prompt("Nechta elementni o'chirish lozim:(index kiriting)");
    var arr = prompt("O'chirgan joyingizga malumot kiriting:(Nimadur, nimadur, ...)");
    fruits.splice(index1, index2, arr.split(", "));
    console.log(fruits);
  } else if ((method === "delete")) {
    alert("Bu method arrayning istalgan joyida malumotni o'chirib beradi, ammo uning index joyi saqlanib 'empty' natija qaytaradi");
    console.log(fruits);
    var index = prompt("qayerdan o'chirish kerak:(index kiriting)");
    fruits.delete(index);
    console.log(fruits);
  } else if ((method === "find")) {
    alert("Bu method arrayni nima qiladi?");
    console.log(fruits);
    fruits.find();
    console.log(fruits);
  } else if ((method === "")) {
    console.log("hech narsa yo'q");
  } else if ((method === "concat")) {
    alert("Bu method ikkita arrayni bir biriga qoshish uchun ishlatiladi");
    var fruits2 = ["Ananas, Mandarin, Kakos"];
    fruits.concat(fruits2)
    console.log(fruits);
  } else if ((method === "length")) {
    alert("Bu method arrayda nechta element borligini tekshiradi.");
    console.log(fruits);
    console.log(fruits.length);
  } else{
    console.log("Xato method kiritdingiz");
  }

