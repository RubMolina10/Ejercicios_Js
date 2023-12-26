//Subcadenas en JS 

let cadena3 = 'Hola Mundo';
//substring(idx_inicio, idx_fin-1)

let cadena1= cadena3.substring(0,4);
console.log(cadena1);

let cadena2 =cadena3.substring(5);

console.log(cadena2);

//Concatenación de cadenas en JS
let cadena4='Hola';
let cadena5='Mundo';

let con = cadena4 +' '+cadena5;

console.log(con)

//Concatenación por interpolación
let cadInte =`${cadena4} ${cadena5}`;

console.log(cadInte);

//Convertir cadena a numeros en JS
 let a ='10', b='20';

 console.log(a+b);

 let suma =parseInt(a)+parseInt(b);

 console.log(suma);

 //Convertir de numeros a cadena en JS

 let c =10, d=20;

 console.log(c+d)

 let concat = c.toString()+d.toString();
 console.log(concat);