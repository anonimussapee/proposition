//https://api.whatsapp.com/send?phone=+5939393090900&text=pues%20si
function hover(){
    if(btnNo.classList.contains("move0")){
        btnNo.classList.replace("move0","move1");
    }else if(btnNo.classList.contains("move1")){
        btnNo.classList.replace("move1","move2");
    }else if(btnNo.classList.contains("move2")){
        btnNo.classList.replace("move2","move3");
    }else if(btnNo.classList.contains("move3")){
        btnNo.classList.replace("move3","move4");
    }else if(btnNo.classList.contains("move4")){
        btnNo.classList.replace("move4","move5");
    }else if(btnNo.classList.contains("move5")){
        btnNo.classList.replace("move5","move6");
    }else if(btnNo.classList.contains("move6")){
        btnNo.classList.replace("move6","move7");
    }else if(btnNo.classList.contains("move7")){
        btnNo.classList.replace("move7","move0");
    }
}
var nombre=prompt("ingresa tu nombre");
const you_name=document.querySelector(".you_name");
nombre=nombre+"</br>";
you_name.innerHTML+=nombre;
const btnNo=document.querySelector(".btn_no");
const btnSi=document.querySelector(".btn_si");
const section_width=screen.width;


    btnNo.addEventListener('mouseover',hover);
