(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function(){

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
          console.log("bienvenido");
          // alert("Bienvenido");
        }else {
          alert("Por favor registrese");
        }   
      }
    }else{
      alert("Registrate!!!!");
    }
  };
  
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
        }else{
          alert("Este producto no lo has agregado");
        }
      };  
    }else{
      alert("No hay productos en tu lista de compras");
    };    
  };
 // ------------------------------Buscador
  var Tienda = function(){
    this.inventario=[];
  };
  Tienda.prototype.agregarAMiBodega = function(producto){
    this.inventario.push(producto);
  }
  // -------------Buscar
  Tienda.prototype.buscar=function(entradaDeTexto){
      for (var i = this.inventario.length-1; i >= 0; i--){
        if(this.inventario[i].nombre === entradaDeTexto){
          alert(this.inventario[i].nombre+" "+"$ "+this.inventario[i].precio);
        }else{
          alert("No se pudo encontrar este producto");
        }
      };    
  };

  var miInventario= new Tienda;
  var miListaDeCompras=new CarritoDeCompras;
  var carroRC1= new Producto("Carro RC 1","buggie de carreras de alto cilindraje, de manejo complejo y alta aceleracion","$ " + 150000);
  $("#carroRC1-nombre").text(carroRC1.nombre);
  $("#carroRC1-descripcion").text(carroRC1.descripcion);
  $("#carroRC1-precio").text(carroRC1.precio);
  $("#btn-agregar-carroRC1").click(function(){
    miListaDeCompras.agregarAlCarrito(carroRC1);
  });
  miInventario.agregarAMiBodega(carroRC1);
  var carroRC2= new Producto("Carro RC 2","Camioneta todo terreno con excelentes amortiguadores que garantizaran recorrer cualquier terreno","$ " + 180000);
  $("#carroRC2-nombre").text(carroRC2.nombre);
  $("#carroRC2-descripcion").text(carroRC2.descripcion);
  $("#carroRC2-precio").text(carroRC2.precio);
  $("#btn-agregar-carroRC2").click(function(){
    miListaDeCompras.agregarAlCarrito(carroRC2);
  });
  miInventario.agregarAMiBodega(carroRC2);
  var carroRC3= new Producto("Carro RC 3","buggie de alta estabilidad, con excelentes amortiguadores que permiten un menor manejo","$ " + 120000);
  $("#carroRC3-nombre").text(carroRC3.nombre);
  $("#carroRC3-descripcion").text(carroRC3.descripcion);
  $("#carroRC3-precio").text(carroRC3.precio);
  $("#btn-agregar-carroRC2").click(function(){
    miListaDeCompras.agregarAlCarrito(carroRC3);
  });
  miInventario.agregarAMiBodega(carroRC3);
  console.log(miInventario.inventario);
  console.log(miListaDeCompras);

  $("#logoCarrito").click(function(){
  alert(miListaDeCompras.listaDeCompras[0].nombre);
  });

  $("#registrar").click(function(event){
    event.preventDefault();
    var nuevoUsuario = new Persona ($("#inputNombre").val(),$("#inputApellido").val(),$("#inputEmail").val(),$("#inputPassword").val());
       console.log(nuevoUsuario.firstName);
       console.log(nuevoUsuario.lastName);
  });
  $("#login").click(function(event){
    event.preventDefault();
    var nuevoLogin = new Inscripcion($("#loginEmail").val(),$("#loginPassword").val());
    nuevoLogin.login();
  });

});







},{}]},{},[1]);
