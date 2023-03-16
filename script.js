var menuButton = document.querySelector('#menu-button');
var menu = document.querySelector('#menu');

// show or hide
menuButton.addEventListener('click', function () {
    menu.classList.toggle('show-menu');
    menuButton.classList.toggle('close');
});

//boutons du footer (juste pour vérifier qu'ils marchent, pas d'utilité directe)
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




