//$(document).ready(function(){

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
  if(this.registros !== undefined){
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

//-------------------------------Productos

//-------------------------------Definicion de las caracteristicas del Producto
  var Producto = function(nombre,descripcion,precio){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
  };
//-------------------------------Definimos una lista de compras
  var CarritoDeCompras = function(){
    this.listaDeCompras = [];
  };
//-------------------------------Guardar los productos seleccionados en una lista de compras
  CarritoDeCompras.prototype.agregarAlCarrito = function(producto){
    this.listaDeCompras.push(producto);
  };
//-------------------------------Quitamos un producto definido de nuestra lista de compras  
  CarritoDeCompras.prototype.quitarDelCarrito = function(nombreDelProducto){
    if(this.listaDeCompras !== undefined){
      for (var i = this.listaDeCompras.length-1; i >= 0; i--){
        if(this.listaDeCompras[i].nombre === nombreDelProducto){
          this.listaDeCompras.splice(i,1);
        };
      };  
    }else{
      alert("No hay productos en tu lista de compras");
    };    
  };
//});


