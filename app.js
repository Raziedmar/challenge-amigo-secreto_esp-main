// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let entrada = "";
let listaDeAmigos = [];
let entradaValida = false;

function agregarAmigo(){

    entrada = document.getElementById('amigo').value;
    if(validarEntrada(entrada)){
        listaDeAmigos.push(entrada);
        console.log(listaDeAmigos);
    }else {
        alert("Ingresa nombre válido");
    }    
}

function validarEntrada(entrada){
    
    if(entrada ==""){
        return false;
    }else {
        return true;
    }
}
