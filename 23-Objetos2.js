//Metodo constructor de objetos  en JS
//funcion constructor de objetos de tipo personas en JS
function cPersona(nombre, Apellidos, email) {
    this.nombre = nombre;
    this.Apellidos = Apellidos;
    this.email = email;
    this.nombreCompleto = function(){
      return this.nombre +' '+ this.Apellidos;
    }
  };

  cPersona.prototype.tel=111;


  let Padre = new cPersona('Juan','Gamez','email@.com');
  console.log(Padre.tel)
  console.log(Padre);
  
  let Madre = new cPersona('Juana','Gomez','email@.com');