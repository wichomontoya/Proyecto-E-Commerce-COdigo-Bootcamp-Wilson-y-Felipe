// Datos del Usuarios------------------------------Definicion de datos para el registro 
var Persona = function (firstName,lastName,email,password) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.password = password;
};  
// Almacenar Inscripciones------------------------------Definicion de registros
var Inscripcion = function(){
  this.registros = [];
}
// Registrarse------------------------------Hacer Inscripcion
Inscripcion.prototype.registrar=function(usuario){
   this.registros.push(usuario);
}
// Loggearse--------------------------------Hacer Login
Inscripcion.prototype.login = function(email,password){
  if(this.registros === undefined){
    for (var i = this.registros.length - 1; i >= 0; i--) {
      if (this.registros[i].email === email && this.registros[i].password === password) {
        alert("Bienvenido a Mi Tiendita");
      }else {
        alert("Por favor registrese");
      }   
    }
  }else{
    alert("Registrate!!!!");
  }
};
// ------------------------------Pruebas Registro y Login
var miRegistro = new Inscripcion();
var usuario = new Persona("felipe", "martinez", "amartinez@correo.com", "qwerty123");
miRegistro.registrar(usuario);
miRegistro.login("amartinez@correo.com","qwerty123");


