$(document).ready(function(){
	var Producto = function(nombre,descripcion,precio){
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.precio = precio;
	};

	var CarritoDeCompras = function(){
		this.listaDeCompras = [];
	};

	CarritoDeCompras.prototype.agregarAlCarrito = function(producto){
		this.listaDeCompras.push(producto);
	};
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
});