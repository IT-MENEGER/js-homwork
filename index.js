
var date = prompt("Sizga qulay formani kiriting: e.g( hh:mm YYYY/MM/DD ) ");
var YYYY = 2024;
var MM = 7;
var DD = 15;
var hh = 5;
var mm = 1;

var symbol = date.match(/[^a-zA-Z0-9]/)[0]; 

if (date.startsWith("hh:mm") && date.includes("YYYY") && date.endsWith("DD")) {
  document.getElementById("demo").innerHTML = hh + ":" + mm;
  document.getElementById("demo2").innerHTML = YYYY + symbol + MM + symbol + DD;

} else if (date.startsWith("hh:mm") && date.includes("YYYY") && date.endsWith("MM")) {


  document.getElementById("demo").innerHTML = hh + ":" + mm;
  document.getElementById("demo2").innerHTML = YYYY + symbol + DD + symbol + MM;

} else if (date.startsWith("hh:mm") && date.includes("DD") && date.endsWith("YYYY")) {

  document.getElementById("demo").innerHTML = hh + ":" + mm;
  document.getElementById("demo2").innerHTML = DD + symbol + MM + symbol + YYYY;

} else if (date.startsWith("hh:mm") && date.includes("DD") && date.endsWith("MM")) {

  document.getElementById("demo").innerHTML = hh + ":" + mm;
  document.getElementById("demo2").innerHTML = DD + symbol + YYYY + symbol + MM;

} else if (date.startsWith("hh:mm") && date.includes("MM") && date.endsWith("YYYY")) {

  document.getElementById("demo").innerHTML = hh + ":" + mm;
  document.getElementById("demo2").innerHTML = MM + symbol + DD + symbol + YYYY;

} else if (date.startsWith("hh:mm") && date.includes("MM") && date.endsWith("DD")) {

  document.getElementById("demo").innerHTML = hh + ":" + mm;
  document.getElementById("demo2").innerHTML = MM + symbol + YYYY + symbol + DD;

} 
else if (date.endsWith("hh:mm") && date.includes("YYYY") && date.startsWith("DD")) {

  document.getElementById("demo").innerHTML = hh + ":" + mm;
  document.getElementById("demo2").innerHTML = YYYY + symbol + MM + symbol + DD;

} else if (date.endsWith("hh:mm") && date.includes("YYYY") && date.startsWith("MM")) {

  document.getElementById("demo").innerHTML = hh + ":" + mm;
  document.getElementById("demo2").innerHTML = YYYY + symbol + DD + symbol + MM;

} else if (date.endsWith("hh:mm") && date.includes("DD") && date.startsWith("YYYY")) {

  document.getElementById("demo").innerHTML = hh + ":" + mm;
  document.getElementById("demo2").innerHTML = DD + symbol + MM + symbol + YYYY;

} else if (date.endsWith("hh:mm") && date.includes("DD") && date.startsWith("MM")) {

  document.getElementById("demo").innerHTML = hh + ":" + mm;
  document.getElementById("demo2").innerHTML = DD + symbol + YYYY + symbol + MM;

} else if (date.endsWith("hh:mm") && date.includes("MM") && date.startsWith("YYYY")) {

  document.getElementById("demo").innerHTML = hh + ":" + mm;
  document.getElementById("demo2").innerHTML = MM + symbol + DD + symbol + YYYY;

} else if (date.endsWith("hh:mm") && date.includes("MM") && date.startsWith("DD")) {

  document.getElementById("demo").innerHTML = hh + ":" + mm;
  document.getElementById("demo2").innerHTML = MM + symbol + YYYY + symbol + DD;

} else {
  
  console.log("Siz noto'g'ri vaqt kiritdingiz");
}
