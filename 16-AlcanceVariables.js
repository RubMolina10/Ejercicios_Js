//Alcance de variables 

let variableGlobal = 5;
//Modificar el valor
variableGlobal = 10;

//Definir función
function miFuncion(variableLocal) {
    console.log(variableLocal);
    //Modificamos la variable global
    variableGlobal = 20;
    //No podemos redefinir una variable global (let)
    var variableGlobal=30;
}

miFuncion(variableGlobal);