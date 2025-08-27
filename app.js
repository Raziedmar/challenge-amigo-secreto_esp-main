// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let entrada = "";
let listaDeAmigos = [];
let entradaValida = false;

/*Funcion agregarAmigo() que agregar el valor ingresando en la caja de input text si el valor es válido

*/

function agregarAmigo(){
    let elementoLista = document.createElement("li");
    let listaHTML = document.getElementById("listaAmigos");
    entrada = document.getElementById('amigo').value;
    if(validarEntrada(entrada)){
        listaDeAmigos.push(entrada);
        elementoLista.textContent = entrada; // Establece el texto del elemento
        listaHTML.appendChild(elementoLista); // Agrega el elemento a la lista en el HTML
        document.getElementById('amigo').value='';
        document.getElementById('resultado').innerHTML='';
        //console.log(listaDeAmigos);
        
    }else {
        alert("Ingresa nombre válido");
    }
    visualizarLista(listaDeAmigos);    
}

/*Funcion validarEntrada(elemento) que valida la entrada de datos en la caja de input texto retornando 'false' si la entrada tiene valor vacío

*/
function validarEntrada(entrada){
    
    return entrada!="";
    
}

function sortearAmigo(){

    if(listaDeAmigos.length>0){
        let numeroLista =  Math.floor(Math.random()*listaDeAmigos.length);
        let elementoHTML = document.getElementById('resultado');
        elementoHTML.innerHTML = listaDeAmigos[numeroLista];
        document.getElementById('listaAmigos').innerHTML = '';
        listaDeAmigos =[];

    }else{
        alert('Ingresa por lo menos un amigo');
    }
    
    
}


