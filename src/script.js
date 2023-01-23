
function btnEncriptar(){
    console.log("se hizo click");
    encriptar();
}

let copy = true;
let infoInitial= true;
let activeTextarea= true;

function encriptar(){
    let textarea1 = document.querySelector('#id_textarea1').value;
    textarea1 = textarea1.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.querySelector('#id_textarea2').value= textarea1;

    if(copy===true){
        let displat=document.querySelector('#id_btnCopy');
        displat.classList.toggle('inactive');
        copy = false;
    }
    if(infoInitial===true){
        let display=document.querySelector('#id_infor-initial');
        display.classList.toggle('inactive');
        infoInitial = false;
    }
    if(activeTextarea===true){
        let display=document.querySelector('#id_textarea2');
        display.classList.toggle('inactive');
        activeTextarea = false;
    }
    
}



function btndesEncriptar(){
    console.log("se hizo click");
    desencriptar();
    
}
function desencriptar(){
    let textarea1 = document.querySelector('#id_textarea1').value;
    textarea1 = textarea1.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.querySelector('#id_textarea2').value= textarea1;
    if(copy===true){
        let displat=document.querySelector('#id_btnCopy');
        displat.classList.toggle('inactive');
        copy = false;
    }
    if(infoInitial===true){
        let display=document.querySelector('#id_infor-initial');
        display.classList.toggle('inactive');
        infoInitial = false;
    }
    if(activeTextarea===true){
        let display=document.querySelector('#id_textarea2');
        display.classList.toggle('inactive');
        activeTextarea = false;
    }
}



