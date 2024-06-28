var email = prompt("Email kiriting");
var emailslice = email.slice(3, -10) 
console.log(emailslice);
var emailhidden = email.replace(emailslice, "***");
console.log(emailhidden);


