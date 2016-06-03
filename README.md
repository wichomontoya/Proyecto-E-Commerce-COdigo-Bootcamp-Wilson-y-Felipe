
**Para ejecutar el proyecto y las pruebas**

Instalar node.js y npm.

Ejecutar

    npm install

El proyecto abre ejecutando en la terminal:
      
      grunt

Los unit test corren con jasmine

      grunt jasmine

Las pruebas de aceptación con cucumberjs y zombie

    grunt connect:develop

    grunt cucumberjs

Para correr el fullStack de pruebas:

    grunt fullTest
