"use strict"

// first homework

let text = prompt("Matn kiriting");
function sumOfIndexes(text) {
    let sum = 0;

    for (let i = 0; i < text.length; i++) {
      sum = sum + i;
    }
    return sum;
  }
  
  let result = sumOfIndexes(text);
  console.log(result); 



// Second homework


let c = [];
for (let i = 0; i < 100; i++) {
  c.push({ name: `someone${i+1}` });
}


let g = [];
for (let i = 0; i < c.length; i++) {
  g.push(c[i].name);
}
console.log(g);

  