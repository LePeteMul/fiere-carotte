var menuButton = document.querySelector('#menu-button');
var menu = document.querySelector('#menu');

// show or hide
menuButton.addEventListener('click', function () {
    menu.classList.toggle('show-menu');
    menuButton.classList.toggle('close');
});

//boutons du footer
var mailButton = document.querySelector('#mail');
mailButton.addEventListener('click', function(event){
    event.target.style.visibility = 'hidden';
})
var phoneButton = document.querySelector('#phone');
phoneButton.addEventListener('click', function(event){
    event.target.style.visibility = 'hidden';
})
var mapButton = document.querySelector('#map');
mapButton.addEventListener('click', function(event){
    event.target.style.visibility = 'hidden';
})
var instaButton = document.querySelector('#insta');
instaButton.addEventListener('click', function(event){
    event.target.style.visibility = 'hidden';
})
var fbButton = document.querySelector('#facebook');
fbButton.addEventListener('click', function(event){
    event.target.style.visibility = 'hidden';
})
var twButton = document.querySelector('#twitter');
twButton.addEventListener('click', function(event){
    event.target.style.visibility = 'hidden';
})

var bpJour = document.querySelector('#bpJour');
var bpEntrees = document.querySelector('#bpEntrees');
var bpPlats = document.querySelector('#bpPlats');
var bpDesserts = document.querySelector('#bpDesserts');

let mJour = document.getElementById("mJour");
let mEntrees = document.getElementById("mEntrees");
let mPlats = document.getElementById("mPlats");
let mDesserts = document.getElementById("mDesserts");

bpJour.addEventListener("click", () =>{
    if(getComputedStyle(mJour).display != "none"){
      mJour.style.display = "none";
    } else {
      d1.style.display = "block";
    }
  })

  bpEntrees.addEventListener("click", () => {
    if(getComputedStyle(mEntrees).display != "none"){
      mEntrees.style.display = "none";
      
    } else {
      mEntrees.style.display = "block";
    }
  })

  bpPlats.addEventListener("click", () => {
    if(getComputedStyle(mPlats).display != "none"){
      mPlats.style.display = "none";
    } else {
      mPlats.style.display = "block";
    }
  })
  bpDesserts.addEventListener("click", () => {
    if(getComputedStyle(mDesserts).display != "none"){
      mDesserts.style.display = "none";
    } else {
      mDesserts.style.display = "block";
    }
  })