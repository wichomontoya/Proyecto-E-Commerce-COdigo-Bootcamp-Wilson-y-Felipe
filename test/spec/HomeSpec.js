describe("Registro", function() {
 var usuario;

 describe("Registro de usuario", function() {

  it("usuario ingresa datos, se registra", function() {
    var usuario = new Persona("felipe", "martinez", "amartinez@correo.com", "qwerty123");
    expect(usuario.firstName).toBe("felipe");
  });
  it("usuario ingresa datos para el logueo y logra entrar ", function() {
    var usuario = new Persona("felipe", "martinez", "amartinez@correo.com", "qwerty123");
    var miRegistro= new Inscripcion();
    miRegistro.registrar(usuario);
    expect(miRegistro.registros.length).toBe(1);
  });
  
});
});
describe("Productos", function() {
 var producto;

 describe(" Agregar y quitar Productos", function() {

  it("se crea un nuevo producto", function() {
    var producto = new Producto("sofa", "sofa de 3 puestos de estilo vintage",800000);
    expect(producto.nombre).toBe("sofa");
  });
  it("se crea un nuevo producto y se agrega al carrito", function() {
    var producto = new Producto("sofa", "sofa de 3 puestos de estilo vintage",800000);
    var miCarrito = new CarritoDeCompras;
    miCarrito.agregarAlCarrito(producto);
    expect(miCarrito.listaDeCompras[0].nombre).toBe("sofa");
  });
  it("se crean 3 nuevos productos, se agregan al carrito y se saca de el el producto sofa", function() {
    var producto1 = new Producto("sofa", "sofa de 3 puestos de estilo vintage",800000);
    var producto2 = new Producto("silla", "sofa de 3 puestos de estilo vintage",800000);
    var producto3 = new Producto("mesa", "sofa de 3 puestos de estilo vintage",800000);
    var miCarrito = new CarritoDeCompras;
    miCarrito.agregarAlCarrito(producto1);
    miCarrito.agregarAlCarrito(producto2);
    miCarrito.agregarAlCarrito(producto3);
    miCarrito.quitarDelCarrito("sofa");
    expect(miCarrito.listaDeCompras[0].nombre).toBe("silla");
  });  
  it("se crean 3 nuevos productos, se intenta saca del carrito algun producto", function() {
    var producto1 = new Producto("sofa", "sofa de 3 puestos de estilo vintage",800000);
    var producto2 = new Producto("silla", "sofa de 3 puestos de estilo vintage",800000);
    var producto3 = new Producto("mesa", "sofa de 3 puestos de estilo vintage",800000);
    var miCarrito = new CarritoDeCompras;
    miCarrito.quitarDelCarrito("sofa");
    expect(miCarrito.quitarDelCarrito("sofa")).toBe(alert("No hay productos en tu lista de compras"));
  });
  it("se crean 3 nuevos productos, se agregan al carrito y se intenta sacar un producto inexistente", function() {
    var producto1 = new Producto("sofa", "sofa de 3 puestos de estilo vintage",800000);
    var producto2 = new Producto("silla", "sofa de 3 puestos de estilo vintage",800000);
    var producto3 = new Producto("mesa", "sofa de 3 puestos de estilo vintage",800000);
    var miCarrito = new CarritoDeCompras;
    miCarrito.agregarAlCarrito(producto1);
    miCarrito.agregarAlCarrito(producto2);
    miCarrito.agregarAlCarrito(producto3);
    expect(miCarrito.quitarDelCarrito("pera")).toBe(alert("Este producto no lo has agregado"));
  }); 
});
describe("Buscador", function() {

 describe("Buscador en nuetra tienda", function() {

  it("usuario ingresa el datos a buscar, se encuentra el producto", function() {
    var producto1 = new Producto("sofa", "sofa de 3 puestos de estilo vintage",800000);
    var miInventario = new Tienda;
    miInventario.agregarAMiBodega(producto1);
    var busqueda = "sofa";
    expect(miInventario.buscar(busqueda)).toBe(alert("sofa $ 80000"));
  });
  it("usuario ingresa el datos a buscar, no se encuentra el producto", function() {
    var producto1 = new Producto("sofa", "sofa de 3 puestos de estilo vintage",800000);
    var miInventario = new Tienda;
    miInventario.agregarAMiBodega(producto1);
    var busqueda = "pera";
    expect(miInventario.buscar(busqueda)).toBe(alert("No se pudo encontrar este producto"));
  });
 }); 
});
});