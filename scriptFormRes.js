const form = document.querySelector("#form");

const input= document.querySelectorAll("input");
const erreurdate = document.querySelector("#erreurdate") ;
const erreurtel = document.querySelector("#erreurtel") ;
const reca = document.querySelector(".reca");
const recaname = document.querySelector(".nomreca");
const recadate= document.querySelector(".datereca");
const recatel = document.querySelector(".telreca");
const recaheures = document.querySelector(".recaheures");
const recacouverts = document.querySelector(".recacouverts");
const heureres = document.querySelector("#heures");
const couvertsres = document.querySelector("#couverts");
const gris = document.querySelector(".gris");
let valid = false;


form.onsubmit=function(event){
    event.preventDefault();
    const telt = document.getElementById("tel").value;
    const namet = document.getElementById("name").value;
    const datet= document.getElementById("date").value;
    
    const tableau = [datet,namet,telt]

    console.log(tableau)
    for (let i=0;i<input.length;i++){
        if (tableau[i]==""){
            input[i].style.border="2px red solid"
            }
        else{
            input[i].style.border="2px black solid"
     
            }
    }
    if (tableau[0]!="" && tableau[1]!="" &&tableau[2]!=""){
        valid=true;
    }
   
    console.log(valid)
    let dateObj = new Date();        
    let month = String(dateObj.getMonth() + 1).padStart(2, '0');
    let day = String(dateObj.getDate()).padStart(2, '0');
    let year = dateObj.getFullYear();
    let jourdate =  year + '-' + month  + '-' + day 
    let newdate = new Date(tableau[0])

    
    if((jourdate>tableau[0]&& tableau[0]!="")||(newdate.getDay()==0||newdate.getDay()==6)){
        if(jourdate>tableau[0]&& tableau[0]!=""){
        input[0].style.border="2px red solid"
        valid = false;
        erreurdate.style.visibility ="visible";
        erreurdate.innerHTML = "Vous ne pouvez pas remonter le temps :("}
        
   
        if (newdate.getDay()==0||newdate.getDay()==6){
        input[0].style.border="2px red solid"
        valid = false;
        erreurdate.style.visibility ="visible";
        erreurdate.innerHTML = "La fière carotte n'est pas ouverte le week-end :("

        }
    }
    else{erreurdate.style.visibility ="hidden";}

    if (!telt.match(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2})/)&&telt!=""){
        input[2].style.border="2px red solid"
        valid = false;
        erreurtel.style.visibility ="visible";
        erreurtel.innerHTML = "Mauvais numéro de tel"
    }
    else{  
      
    erreurtel.style.visibility ="hidden";}
    if (valid){
        erreurdate.style.visibility ="hidden";
      
        erreurtel.style.visibility ="hidden";
       reca.style.opacity="1"
        reca.style.zIndex="999"

        reca.style.animation ="fadeIn 1s"
        recaname.innerHTML=`Nom & Prenom : ${namet}`
        recacouverts.innerHTML=`Couverts : ${couvertsres.value}`

        recadate.innerHTML=`Date : ${datet}`
        recaheures.innerHTML=`Heure : ${heureres.value}`
        recatel.innerHTML=`Tel : ${telt}`
        gris.style.filter= "blur(5px)"
       
    }
}


function retourForm(){
    reca.style.opacity="0"
        reca.style.zIndex="-10"
    gris.style.filter= "blur(0px)"
}

function retourIndex(){
    window.location="./index.html"
     window.location.href ="./index.html";
    
   
}