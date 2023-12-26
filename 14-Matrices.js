//Es un arreglo de dos dimensiones 

let matrizNumeros = [[1,2],[2,2]];
let matrizNum =     [[1,2],[2,2]];
let operacion = matrizNumeros * matrizNum;
console.log(operacion);

let matriz =[[100,200,300],[400,500,600]];

// let matriz =[[100,200,300],[400,500,600],[700,800,900]];

//Modificar valores
// matriz[0][1] =100;
// matriz[0][2] =200;
// matriz[0][3] =300;

// //Renglon 1
// matriz[1][0] =400;
// matriz[1][1] =500;
// matriz[1][2] =600;

// //Renglon 2
// matriz[2][0] =700;
// matriz[2][1] =800;
// matriz[2][2] =900;




//Imprime la matriz con valor modificado}+
console.log(`Elemento[0][0] en la matriz ${matriz[0][0]}`);
console.log(`Elemento[0][1] en la matriz ${matriz[0][1]}`);
console.log(`Elemento[0][2] en la matriz ${matriz[0][2]}`);

console.log(`Elemento[1][0] en la matriz ${matriz[1][0]}`);
console.log(`Elemento[1][1] en la matriz ${matriz[1][1]}`);
console.log(`Elemento[1][2] en la matriz ${matriz[1][2]}`);

// console.log(`Elemento[2][0] en la matriz ${matriz[2][0]}`);
// console.log(`Elemento[2][1] en la matriz ${matriz[2][1]}`);
// console.log(`Elemento[2][2] en la matriz ${matriz[2][2]}`);

//Iterar una matriz

//Numero de renglones
console.log(matriz[0].length);
console.log(matriz[1].length);

//Renglones
for (let ren = 0; ren < matriz.length; ren++) {
   //columnas
   for(let col = 0; col<matriz[ren].length; col++)
   {
     console.log(`Elemento[${ren}][${col}] = ${matriz[ren][col]}`);
   }
    
}