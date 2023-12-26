//Declarar función
//Procedimiento
function imprimirmensaje(mensaje) {
  console.log(`Mensaje ${mensaje}`);
}
imprimirmensaje("Hola mundp");
//////////////////
//Funcion que retorna un valor
function suma(a, b) {
  let resultado = a + b;
  return resultado;
}

//Invocamos la función
//agregarle argumentos
console.log(`La suma de los dos numeros es: ${suma(5, 3)}`);

//Paso valor en JS
//Pasando información de tipo primitivo (number,bool,string)

function cambiarValor(parametro) {
  parametro = 20;
}

let argumento = 10;

cambiarValor(argumento);

console.log(argumento);

//Paso por referencia
//Objetos (array) se pasan referencia

function cambiaValor(params) {
  params[0] = 20;
}

//Llamamos a la función
let arreglo = [10];
console.log(`Antes de la función ${arreglo[0]}`);
cambiaValor(arreglo);
console.log(arreglo);

//Cadenas y funciones en JS
//Cadenas inmutables en JS  (No se puede modificar su valor )

function cambiaValue(params) {
  params = "Mundo";
}
//Llammamos la función
let ar = "Hola";
console.log(`Antes de la función: ${ar}`);

cambiaValue(ar);

console.log(`Despues de la funcioón ${ar}`);