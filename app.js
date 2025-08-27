// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let entrada = "";
let listaDeAmigos = [];
let entradaValida = false;

/*Funcion agregarAmigo() que agregar el valor ingresando en la caja de input text si el valor es válido

*/

function agregarAmigo(){

    entrada = document.getElementById('amigo').value;
    if(validarEntrada(entrada)){
        listaDeAmigos.push(entrada);
        console.log(listaDeAmigos);
        visualizarLista(listaDeAmigos);
    }else {
        alert("Ingresa nombre válido");
    }    
}

/*Funcion validarEntrada(elemento) que valida la entrada de datos en la caja de input texto retornando 'false' si la entrada tiene valor vacío

*/
function validarEntrada(entrada){
    
    if(entrada ==""){
        return false;
    }else {
        return true;
    }
}
/*Funcion visualizarLista(lista) que permite visualizar la lista de nombres de amigos agregados

*/
function visualizarLista(lista){
    let elementoHTML = document.getElementById('listaAmigos');
    elementoHTML.innerHTML = lista;
    return;
}

function sortearAleatorio(){

}
