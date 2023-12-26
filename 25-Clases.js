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

  get appellido() {
    return this._apellido;
  }
  set apelido(apellido) {
    this._apellido = apellido;
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
}

let persona1 = new Persona("Ruben", "Velez");
persona1.nombre = "Rosa"; //Se manda a llamar el metodo set
console.log(persona1.nombre); //Se manda a llamar el metodo get

// let persona2 = new Persona("Juan", "p");
// console.log(persona2);

let empleado1 = new Empleado('Juan','Lopez','Sistemas')
console.log(empleado1);
