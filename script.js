let menu = document.getElementById("nav");
let open = document.getElementById("menu-btn");
let close = document.getElementById("close");

function openmenu() {
  menu.style.left = "0";
  open.style.display = "none";
  close.style.display = "block";
}
function closemenu() {
  menu.style.left = "-100%";
  open.style.display = "block";
  close.style.display = "none";
}

// nav bg color change

function change() {
  var nav = document.getElementById("navbar");
  var value = window.scrollY;
  if (value > 80) {
    nav.classList.add("nav-change");
  } else {
    nav.classList.remove("nav-change");
  }
}

window.addEventListener("scroll", change);
const ebillInput = document.querySelector('.ebill');
const gbillInput = document.querySelector('.gbill');
const obillInput = document.querySelector('.obill');
const cbillInput = document.querySelector('.cbill');
const fbillInput = document.querySelector('.fbill');
const submitBtn = document.querySelector('.submit');

let ebill;
let gbill;
let obill;
let cbill;
let fbill;

submitBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default form submission action

    ebill = parseFloat(ebillInput.value) || 0;
    gbill = parseFloat(gbillInput.value) || 0;
    obill = parseFloat(obillInput.value) || 0;
    cbill = parseFloat(cbillInput.value) || 0;
    fbill = parseFloat(fbillInput.value) || 0;

    const result = (ebill*105) + (gbill*105) + (obill*113) + (cbill*79) + (fbill*1100);
    document.querySelector(".result").innerHTML = "Result: " + result;

    console.log(ebill);
    console.log(gbill);
    console.log(obill);
    console.log(cbill);
    console.log(fbill);
});