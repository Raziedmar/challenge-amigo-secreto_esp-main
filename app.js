// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let entrada = "";
let amigos = [];

/*Funcion agregarAmigo() que agregar el valor ingresando en la caja de input text si el valor es válido

*/

function agregarAmigo(){
    document.getElementById("sortear").innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Sortear amigo';
    entrada = document.getElementById('amigo').value;//Captura el valor del campo de entrada
    if(validarEntrada(entrada)){ //Valida la entrada
        amigos.push(entrada); //Actualiza el array de amigos
        document.getElementById('amigo').value='';//Limpiar el campo de entrada
        document.getElementById('resultado').innerHTML='';//Limpiar el campo de resultado: Amigo Secreto Sorteado        
        
    }else {
        alert("Por favor, inserte un nombre.");
        console.log(amigos);
        return;
        
    }
    actualizaAmigos(amigos);
}

/*Funcion validarEntrada(elemento) que valida la entrada de datos en la caja de input texto retornando 'false' si la entrada tiene valor vacío

*/
function validarEntrada(entrada){
    
    return entrada!="";
    
}

function actualizaAmigos(amigos){
    
    let listaHTML = document.getElementById("listaAmigos");
    let elementoLista = document.createElement("li");    
    for (let i = 0; i < amigos.length; i++) {
        elementoLista.textContent = amigos[i]; // Establece el texto del elemento
        listaHTML.appendChild(elementoLista); // Agrega el elemento a la lista en el HTML
    
    }
}

function sortearAmigo(){

    if(amigos.length>0){ //Validar que haya amigos disponibles
        let numeroLista =  Math.floor(Math.random()*amigos.length);//Generar un índice aleatorio
        let elementoHTML = document.getElementById('resultado');
        elementoHTML.innerHTML = amigos[numeroLista]; //Obtener el nombre sorteado y mostrar el resultado
        document.getElementById("sortear").innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Sorteado';
        document.getElementById('listaAmigos').innerHTML = '';
        amigos =[];

    }else{
        alert('Ingresa por lo menos un amigo');
    }
    
    
}


