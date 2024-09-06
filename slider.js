const next = document.getElementById("next");
const prev = document.getElementById("prev");
const imgs = document.getElementById("imgs");

const img = document.querySelectorAll("#imgs img");

let index = 0;
function sliderImg() {
  if (index > img.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = img.length - 1;
  }
  imgs.style.transform = `translateX(${-index * 500}px)`;
}

next.addEventListener("click", () => {
  index++;
  sliderImg();
});

prev.addEventListener("click", () => {
  index--;
  sliderImg();
});

document.addEventListener("keypress", (e) => {
  if (e.key === "d") {
    index++;
    sliderImg();
  } else if (e.key === "a") {
    index--;
    sliderImg();
  }
});


// up OR down

const main = document.getElementById("main"); 
const sections = document.querySelectorAll("#main section"); 

let mainIndex = 0;

function upORdown() {
  if (mainIndex > sections.length - 1) {
    mainIndex = 0;
  } else if (mainIndex < 0) {
    mainIndex = sections.length - 1;
  }
  main.style.transform = `translateY(${-mainIndex * 100}vh)`; 
}

document.addEventListener("keypress", (e) => {
  if (e.key === "w") {
    mainIndex++;
    upORdown();
  } else if (e.key === "s") {
    mainIndex--;
    upORdown();    
  }
});
