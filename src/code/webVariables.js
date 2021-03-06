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
          $("#bienvenida").show();
        }else {
          $("#porfavorRegistrese").show();
        }   
      }
    }else{
      $("#porfavorRegistrese").show();
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
 // --------------------------------------Buscador
  var Tienda = function(){
    this.inventario=[];
  };
  Tienda.prototype.agregarAMiBodega = function(producto){
    this.inventario.push(producto);
  }
  // ------------------------------------Funcion Buscar
  Tienda.prototype.buscar=function(entradaDeTexto){
      for (var i = this.inventario.length-1; i >= 0; i--){
        if(this.inventario[i].nombre === entradaDeTexto){
          alert(this.inventario[i].nombre+" "+"$ "+this.inventario[i].precio);
        }else{
          $("#noSeEncuentraProducto").show();
          break;
        }
      };    
  };
// -------------------------------------Definir Bodega de productos
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
// ----------------------------------Busqueda
  $("#botonBusqueda").click(function(event){
    event.preventDefault();
    var miBusqueda = $("#busqueda").val();
    miInventario.buscar(miBusqueda);
  })
  
  $("#logoCarrito").click(function(){
  alert(miListaDeCompras.listaDeCompras[0].nombre);
  });
// -----------------------------------Comprobacion registro y login
  var nuevoRegistro= new Inscripcion();
  $("#registrar").click(function(event){
    event.preventDefault();
    
    var nuevoUsuario = new Persona ($("#inputNombre").val(),$("#inputApellido").val(),$("#inputEmail").val(),$("#inputPassword").val());
      nuevoRegistro.registrar(nuevoUsuario);
      console.log("hola");
      console.log(nuevoRegistro.registros);
      console.log(nuevoRegistro.registros[0].firstName);
      console.log(nuevoRegistro.registros[0].lastName);

  });
  $("#login").click(function(event){
    event.preventDefault();
    nuevoRegistro.login($("#loginEmail").val(),$("#loginPassword").val());
  });

});






