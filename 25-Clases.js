//No es posible crear objetos antes de declarar la clase
//let persona2 = new Persona('','');

/*Clase padre*/

class Persona {
  static contadorPersonas = 0; //Atributo de nuestra clase

  static get getMax_OBJ() {
    return 5;
  }
  email = "Value default";

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    if (Persona.contadorPersonas < Persona.getMax_OBJ) {
      this.idPersona = ++Persona.contadorPersonas;
    }
    else{
      console.log('Se ha superado el maximo ');
    }

    Persona.contadorObjetosPersonas++;
    console.log("Se incrementa n:" + " " + Persona.contadorObjetosPersonas);
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }

  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  nombreCompleto() {
    return this.idPersona + " " + this._nombre + " " + this._apellido;
  }
  //Sobreescribiendo el metodo de la clase Padre Object
  toString() {
    //Se aplica polimorfismo(multiples formas de ejecución)
    //el metodo se ejecuta depende si es una referencia de tipo padre o hijo
    return this.nombreCompleto();
  }
  static saludar() {
    console.log("Saludos desde el metodo static");
  }
  static saludar2(persona) {
    console.log(persona.nombre + " " + persona.apellido);
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido); //llamar al cosntructor
    this._departamento = departamento;
  }
  get departamento() {
    return this._departamento;
  }
  set departamento(departamento) {
    return (this._departamento = departamento);
  }
  //Sobreescritura
  nombreCompleto() {
    return super.nombreCompleto() + " " + this._departamento;
  }
}

let persona2 = new Persona("Ruben", "Velez");
//Se manda a llamar el metodo set
console.log(persona2.toString());

let empleado1 = new Persona("Juan", "Lopez", "Sistemas");

console.log(empleado1.toString());

let persona3 = new Persona("Juan", "Lopez", "Sistemas");

console.log(persona3.toString());

let persona4 = new Persona("Juan", "Lopez", "Sistemas");

console.log(persona4.toString());

let persona5 = new Persona("Juan", "Lopez", "Sistemas");

console.log(persona5.toString());

let persona6 = new Persona("Juan", "Lopez", "Sistemas");

console.log(persona6.toString());

console.log(Persona.contadorPersonas);
