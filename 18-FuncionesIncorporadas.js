//Funciones incorporadas en JS

//Obtener largo de una cadena 

let cadena1 = 'HolaMundo'

console.log(cadena1.length);

//No podemos modificar una cadena en JS ya que son inmutables

cadena1[0] = 'x';

console.log(cadena1);

function validadorDePalabras(palabra) {
if (palabra.length >=10) {
    console.log(`Es una palabra extendida con: ${palabra.length} caracteres`);
 
}
else{
   console.log('Es una palabra corta');
   console.log(`Es una palabra no extendida con: ${palabra.length} caracteres`);
}
}

validadorDePalabras('Esto es una prueba ');

//Funcion que recorre caracteres 

function recorrido(palabraReccorer) {
 for (let index = 0; index < palabraReccorer.length; index++) {
   console.log(`${index} - ${palabraReccorer[index]}`);
 }
}

recorrido('Hola');