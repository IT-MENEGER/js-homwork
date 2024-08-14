const object = [];

for (let i = 0; i < 500; i++) {
  const obj = {
    js: 10 + i,
    html: 11 + i,
    css: 12 + i,
  };

  object.push(obj);
}

let sumofobject = object.map((obj) => obj.js + obj.html + obj.css);


let result = 0;

for (let i = 0; i < object.length; i++) {
  result += sumofobject[i];
}
console.log(result);
