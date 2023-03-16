const form = document.querySelector("#form");
const tel = document.querySelector("#tel");
const name = document.querySelector("#name");
const date= document.querySelector("#date");
const input= document.querySelectorAll("input");


form.onsubmit=function(event){
    event.preventDefault();
    const telt = document.getElementById("tel").value;
    const namet = document.getElementById("name").value;
    const datet= document.getElementById("date").value;

    const tableau = [datet,namet,telt]

    console.log(tableau)
    for (let i=0;i<input.length;i++){
        if (tableau[i]==""){
            input[i].style.border="2px red solid"}
      
        else{
            input[i].style.border="2px black solid"}
    }

}


