let input = document.getElementById("input");
let users = document.getElementById("users");
let error = document.getElementById("error");
let arrname = [];

function userList() {
  let name = input.value;
  if (name.length > 2) {
      let li = document.createElement("li");
      li.textContent = name;
      users.appendChild(li);
      arrname.push[name];
      error.innerHTM= "";
      
    } else {
      error.innerHTML = "Iltimos, ism kiriting!";
      error.style.color = "red";
    }
    console.log(arrname);

}
  

function sortAZ() {
  arrname.sort();
}
