//Arreglos en js

let nArreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

nArreglo[0] = "sasas";

console.log(nArreglo);

let arrayNumeros = [1, 2, 3, 4, 5];

let sum=0;
for (let index = 0; index < arrayNumeros.length; index++) {
  console.log(`Arreglo[${index}]`,arrayNumeros[index]);
  sum += index;
 
}
console.log(`La suma es: ${sum}`);
