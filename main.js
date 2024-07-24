"use strict"

// let text = 'hello'
// function sumOfIndexes(text) {
//     let sum = 0;

//     for (let i = 0; i < text.length; i++) {
//       sum += i;
//     }
  
//     return sum;
//   }
  
//   let result = sumOfIndexes("hell");
//   console.log(result); 


let c = [];
for (let i = 0; i < 10; i++) {
  c.push({ name: `someone${i+1}` });
}

let g = [];
for (let i = 0; i < c.length; i++) {
  g.push(c[i].name);
}

console.log(g);

  