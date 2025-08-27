// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let entrada = "";

function agregarAmigo(){

    entrada = document.getElementById('amigo').value;
    validarEntrada(entrada);
}
function validarEntrada(entrada){
    
    if(entrada ==""){
        alert("Ingresa nombre válido");
    }else {
        console.log(entrada);
        return entrada;
    }
}
