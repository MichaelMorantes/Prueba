const http = require("http");
const port = 5000;

const server = http.createServer(function (req, res) {});
server.listen(port, function (error) {});

// Array a ordenar
const EJEMPLO = [1, 4, 5, 8, 10];
// Se cambia el valor del segundo parametro para decidir el tipo de ordenamiento
ordenamiento(EJEMPLO, "max"); // NOTA: min o max

function ordenamiento(array, tipo) {
  let result;

  if (tipo == "max") result = MaxToMin(array);
  if (tipo == "min") result = MinToMax(array);

  console.log(result);
}

// Ordena de mayor a menor
function MaxToMin(array) {
  // Bandera para verificar se ordeno todo el array
  var listo = false;
  while (!listo) {
    listo = true;
    // Recorre el array
    for (var i = 1; i < array.length; i += 1) {
      // Verica si el valor anterior es menor al valor actual
      if (array[i - 1] < array[i]) {
        listo = false;
        // Asignamos el valor a una variable auxiliar
        var tmp = array[i - 1];
        // Cambiamos la posicion del valor anterior
        array[i - 1] = array[i];
        // Cambiamos la posicion del valor actual
        array[i] = tmp;
      }
    }
  }

  return array;
}

// Ordena de menor a mayor
function MinToMax(array) {
  // Bandera para verificar se ordeno todo el array
  var listo = false;
  while (!listo) {
    listo = true;
    // Recorre el array
    for (var i = 1; i < array.length; i += 1) {
      // Verica si el valor anterior es mayor al valor actual
      if (array[i - 1] > array[i]) {
        listo = false;
        // Asignamos el valor a una variable auxiliar
        var tmp = array[i - 1];
        // Cambiamos la posicion del valor anterior
        array[i - 1] = array[i];
        // Cambiamos la posicion del valor actual
        array[i] = tmp;
      }
    }
  }

  return array;
}
