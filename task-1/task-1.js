const res = document.getElementById("res");
const inp = document.getElementById("input");

function getfoto() {
  let inputvalue = inp.value;
  res.innerHTML += `<img src="${inputvalue}" alt="rasm">`;
  inputvalue = '';
}
