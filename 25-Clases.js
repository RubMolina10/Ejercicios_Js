//No es posible crear objetos antes de declarar la clase
//let persona2 = new Persona('','');

/*Clase padre*/

class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
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
  nombreCompleto(){
    return this._nombre +' '+ this._apellido;
  }
  //Sobreescribiendo el metodo de la clase Padre Object
  toString()
  {
    //Se aplica polimorfismo(multiples formas de ejecución)
    //el metodo se ejecuta depende si es una referencia de tipo padre o hijo 
    return this.nombreCompleto();
  }
  static saludar()
  {
    console.log('Saludos desde el metodo static');
  }
  static saludar2(persona)
  { 
     console.log(persona.nombre +' '+ persona.apellido);
  }
}

class Empleado extends Persona {
  constructor(nombre,apellido,departamento) {
    super(nombre,apellido); //llamar al cosntructor 
    this._departamento = departamento;
  }
  get departamento(){
    return this._departamento;
  }
  set departamento(departamento){
    return this._departamento = departamento;
  }
  //Sobreescritura
  nombreCompleto(){
    return super.nombreCompleto() +' '+this._departamento;
  }
}

let persona1 = new Persona("Ruben", "Velez");
persona1.nombre = "Rosa"; //Se manda a llamar el metodo set
console.log(persona1); //Se manda a llamar el metodo get

// let persona2 = new Persona("Juan", "p");
// console.log(persona2);

let empleado1 = new Empleado('Juan','Lopez','Sistemas')
console.log(empleado1.nombreCompleto());

console.log(empleado1.toString())

// No es posible llamar un metodo static desde un objeto     
Persona.saludar();
Persona.saludar2(persona1);

Empleado .saludar();
Empleado.saludar2(empleado1);