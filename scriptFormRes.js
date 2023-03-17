const form = document.querySelector("#form");

const input= document.querySelectorAll("input");
const erreurdate = document.querySelector("#erreurdate") ;

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
            valid = false;}
        else{
            input[i].style.border="2px black solid"
            valid = true;}
    }
    let dateObj = new Date();        
    let month = String(dateObj.getMonth() + 1).padStart(2, '0');
    let day = String(dateObj.getDate()).padStart(2, '0');
    let year = dateObj.getFullYear();
    let jourdate =  year + '-' + month  + '-' + day 
    let newdate = new Date(tableau[0])

    
    if(jourdate>tableau[0]){
        input[0].style.border="2px red solid"
        valid = false;
        erreurdate.style.visibility ="visible";
        erreurdate.innerHTML = "Vous ne pouvez pas remonter le temps :("
        
    }
    if (newdate.getDay()==0||newdate.getDay()==6){
        input[0].style.border="2px red solid"
        valid = false;
        erreurdate.style.visibility ="visible";
        erreurdate.innerHTML = "La fière carotte n'est pas ouverte le week-end :("

    }
    if (valid){
        erreurdate.style.visibility ="hidden"
        
        form.submit();
     
       
        

    }
}


