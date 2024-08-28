const a = {
    name: "fest",
    location: { city: "Jizzax" },
    lat: 1233.32,
    lon: 302.32,
    someone: "age",
  };
  
  const b = {
    name: "test",
    location: { city: "Jizzax" },
    lat: 1233.32,
    lon: 302.32,
    someone: "age",
  };
console.log(a.location === b.location);


for (const key in a) {
    if (a[key] === b[key]) {
        delete a[key];
    }  
}

console.log(a);