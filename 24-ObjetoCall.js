let persona1 ={
    nombre:'Jesus',
    apellido:'Gamez',
    nombreCompleto:function(titulo, telefono){
        //return titulo +' '+this.nombre +' '+ this.apellido +' '+tel;
        return titulo +' '+telefono +' '+this.nombre +' '+ this.apellido;
    }
};

let persona2 ={
    nombre:'Jose',
    apellido:'Gamez',
   
};

let arreglo =['Ing:','11'];
console.log(persona1.nombreCompleto.apply(persona2,arreglo));