const nom = document.querySelector("#name_input");
const bouton = document.querySelector(".contactButton");
const over = document.querySelector(".jpp");

bouton.addEventListener('click',function(){
  console.log(over)
  over.innerHTML = `Merci  ${nom.value} nous avons bien reçu votre message! Nous vous réponderons prochainement!`

})

  

