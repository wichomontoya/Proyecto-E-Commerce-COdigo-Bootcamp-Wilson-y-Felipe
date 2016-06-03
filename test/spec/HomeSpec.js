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
