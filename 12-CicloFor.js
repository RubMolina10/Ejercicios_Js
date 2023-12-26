//Ciclo for

let repeticiones = 5;

for (let contador = 0; contador <= repeticiones; contador++) {
  console.log(contador);
}

//Imprimir los primeros 10 numeros de 3 en 3 en js
// 1-4-7-10-13

for (let index = 1; index <= 10; index += 3) {
  console.log(index);
}

for (let i = 1; i >= -11; i -= 3) {
  console.log(i);
}

//Acomulador Suma
//Suma de los de los 5 primeros numeros
//Ciclo for
let rep = 5;
let suma = 0;
for (let contador = 0; contador <= rep; contador++) {
  suma += contador;
}
console.log(suma);

// let nConatador = 0;
// let sumatoria = 5;
// while (nConatador <= rep) {
//   sumatoria += nConatador;
//   console.log(sumatoria);
//   nConatador++;
// }

//Ciclo While
let nCont = 0;
let sumatoria = 0;
while (nCont <= rep) {
  sumatoria += nCont;
  nCont++;
}
console.log(suma);

//Ciclo do...while
let nConta = 0;
let nSuma = 0;
let nRep = 5;
do {
    nSuma += nConta;
    nConta++; 
}while (nConta <= nRep);
console.log(nSuma);

