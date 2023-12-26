//Ciclo While
//Imprimir los valores del 0 al 5

// let cont = 0;
// let repeticiones =5;

// do {
//     console.log(cont++);
//     //cont++;
// }while(cont <= repeticiones);


//Ciclo While
//Imprimir los valores del 0 al 5

let edad = 16; // Edad de la persona
let esMayor = false; // Variable para almacenar el resultado

while (edad >= 18) {
    esMayor = true;
    break; // Rompe el bucle una vez que se cumple la condición
}

if (esMayor) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}


