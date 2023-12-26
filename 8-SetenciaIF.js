//Condicion is else, else if
let a = 10;
let limite = 100;

if (a == limite) {
  console.log("Si es igual");
} else if (a % 2 == 0) {
  console.log("Es numero par");
}

//Operador Ternario

let miNumero = 0;

miNumero > 0 ? console.log("Positivo") : console.log("Negativo");

//Ejercicios
//Validar si es mayor o menor de edad
const edadAdulto = 18;
let edadPersona = 19;

//Se indica la condición ternaria
edadPersona >= edadAdulto
  ? console.log("Es mayor de edad")
  : console.log("Es menor de edad");

//Validar los dias de la semana

let diaSemana =1 ;

if (diaSemana == 1) {
    console.log('Lunes');
}
else if (diaSemana == 2) {
    console.log('Martes');
}
else if (diaSemana == 3) {
    console.log('Miercoles');
}
else if (diaSemana == 4) {
    console.log('Jueves');
}
else if (diaSemana == 5) {
    console.log('Viernes');
}
else if (diaSemana == 6) {
    console.log('Sabado');
}
else if (diaSemana == 7) {
    console.log('Domingo');
}
else{
    console.log('Dia invalido');
}