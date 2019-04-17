function Persona(parNombre, parApellidos, parEdad) {
  this.res = document.getElementById("resultado");
  this.nombre = parNombre;
  this.apellidos = parApellidos;
  this.edad = parEdad;
  this.muestraNombreCompleto = function() {
    this.res.innerHTML = "Nombre y apellidos: " + this.nombre + " " + this.apellidos + "<br>";
  };
  this.muestraEdad = function() {
    this.res.innerHTML +="Edad: " + this.edad + "<br>";
  };
}

function crearPersona(parNombre, parApellidos, parEdad) {
  var persona = new Persona(parNombre, parApellidos, parEdad);
  persona.muestraNombreCompleto();
  persona.muestraEdad();
}

