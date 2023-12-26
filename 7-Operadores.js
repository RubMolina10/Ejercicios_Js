//Operadores

let a, c, d, e, f;

//Suma
a = 3 + 3;
console.log(a);
//Resta
b = 3 - 3;
console.log(b);
//Multiplicación
c = 3 * 3;
console.log(c);
//División
d = 3 / 3;
console.log(d);
//Residuo
d = 3 % 2;
console.log(d);
//Exponecial
d = 3 ** 2;
console.log(d);

//Operador de asignación
let miNumero = 10;
console.log(miNumero);

miNumero = 20;
console.log(miNumero);

//Operador de asignación +=
miNumero += 5;
console.log(miNumero);

//Operador de asignación -=
miNumero -= 3;
console.log(miNumero);

//Operador de asignación *=
miNumero *= 2;
console.log(miNumero);

//Operador de asignación /=
miNumero /= 4;
console.log(miNumero);

//Operador de asignación %=
miNumero %= 2;
console.log(miNumero);

//Operador de asignación **=
miNumero = 8;
miNumero **= 2;
console.log(miNumero);

//Operadores de comparación
let x = 5;
let y = "5";

console.log(x);
console.log(y);

//Operador de igualdad ==
console.log("x == y -> ", x == y);
console.log(`${x} == ${y} -> ${x == y}`);

//Operador de igualdad exacta
console.log("x === y -> ", x === y);
//String interpolation
console.log(`${x} === ${y} -> ${x === y}`);

//Operadores distintos
//Compara valor y convierte el tipo de dato si es necesario
console.log(`${x} != ${y} -> ${x != y}`);

//Operador distinto exacto
//Compara el valor y el tipo de datpo
console.log(`${x} !== ${y} -> ${x !== y}`);

//Operador de menor que
console.log(`${x} < ${y} -> ${x < y}`);
//Operador de menor o igual que
console.log(`${x} <= ${y} -> ${x <= y}`);
//Operador de mayor que
console.log(`${x} > ${y} -> ${x > y}`);
//Operador de menor o igual que
console.log(`${x} >= ${y} -> ${x >= y}`);

//Operadores lógicos en Js
let p = true;
let q= false;
console.log(p);
console.log(q);

//Operador logíco con && AND
//Regresa verdadero si ambos son verdaderos
console.log(`${p} && ${q} -> ${p && q}`);

//Operador logico con OR->||
//Regresa verdadero si cualquiera de los dos valores es verdadero
console.log(`${p} || ${q} -> ${p || q}`);

//Operador logico con Not ->!
//Regresa verdadero si cualquiera de los dos valores es verdadero
console.log(`${p} -> ${!p}`);

//Valor dentro del rango 
//Ejemplo valor dentro del rango
//Se definen variables
let minimo = 0, maximo =5;
let dato = 5;

let dentroRango = dato >=minimo && dato<= maximo;

console.log(dentroRango);

//Procedencia de operadores 
let r = 12/(3+2)*3-1;
console.log(r);