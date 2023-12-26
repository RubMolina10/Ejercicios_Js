const { Console } = require("console");

//Objetos en JS
let x = 10;

console.log(x.length);

let persona = {
  nombre: "Juan",
  Apellidos: "Zaa",
  email: "email.com",
  edad: 37,
  soltero: true,
  nombreCompleto: function () {
    return (
      this.nombre +
      " " +
      this.Apellidos +
      " " +
      this.email +
      " " +
      this.edad +
      " " +
      this.soltero
    );
  },
};

console.log(persona.nombreCompleto());

//Formas de creación de Objetos
let persona2 = new Object();
persona2.Nombre = "Ruben";
persona2.Apellidos = "Gamez Molina";
persona2.nombreCompleto = function () {
  return this.Nombre + " " + this.Apellidos;
};

console.log(persona2.nombreCompleto());

//Como acceder a las propiedades de un objeto
let persona1 = {
  nombre: "Juan",
  Apellidos: "Zaa",
  email: "email.com",
  edad: 37,
};

console.log(persona1["nombre"]);

//Recorrer una de las propiedades con un for in
for (propiedadPersonas in persona1) {
  console.log(persona1[propiedadPersonas]);
}

//Eliminar o agregar propiedades a un objeto
//Como acceder a las propiedades de un objeto
let persona11 = {
  nombre: "Juan",
  Apellidos: "Zaa",
  email: "email.com",
  edad: 37,
};
//persona11.nombre='S'
persona11.nm = 11;
console.log(persona11);
delete persona11.nm;

console.log(persona11);

//Concatenar valores de cada zona
console.log(persona11.nombre + " " + persona11.Apellidos);

for (nombreprop in persona11) {
  console.log(persona11[nombreprop]);
}

let arrayPerson = Object.values(persona11);

console.log(arrayPerson);

let personJSON = JSON.stringify(persona11);

console.log(personJSON);

//Metodo GET,SET
let sPersona = {
  nombre: "Juan",
  Apellidos: "Zaa",
  email: "email.com",
  edad: 37,
  soltero: true,
  idioma: "es",
  get lang() {
    return this.idioma.toUpperCase();
  },
  set lang(lang) {
    this.idioma = lang.toUpperCase();
  },
  get nombreCompleto() {
    return (
      this.nombre +
      " " +
      this.Apellidos +
      " " +
      this.email +
      " " +
      this.edad +
      " " +
      this.soltero
    );
  },
};

console.log(sPersona.nombreCompleto);
//console.log(sPersona.lang);

sPersona.lang = "en";

console.log(sPersona.idioma);

//Metodo constructor de objetos  en JS
//funcion constructor de objetos de tipo personas en JS
function cPersona(nombre, Apellidos, email) {
  this.nombre = nombre;
  this.Apellidos = Apellidos;
  this.email = email;
  this.nombreCompleto = function(){
    return this.nombre +' '+ this.Apellidos;
  }
}

let Padre = new cPersona('Juan','Gamez','email@.com');

console.log(Padre);

let Madre = new cPersona('Juana','Gomez','email@.com');

console.log(Madre);

let Hijo = new cPersona('Laura',Padre.Apellidos +' '+ Madre.Apellidos, 'email@coppel.com');

console.log(Hijo);

let padre2 = new cPersona('Juan','Gomez','email@.com');

console.log(padre2.nombreCompleto())

let miObjeto = new Object();
let miObjeto2 ={};

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion1 = new Function();
let miFuncion2 = mifuncion(a){
  return  a ='a';
};




