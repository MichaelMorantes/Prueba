const http = require("http");
const port = 5000;

const server = http.createServer(function (req, res) {});
server.listen(port, function (error) {});

// Cada array representa el resultado de cada sesion
const ENTRADA = [
  ["R", "T"],
  ["T", "R"],
  ["P", "T"],
];

// Se llama la funcion principal
rps(ENTRADA);

// Decide el ganador en base al valor de los contadores
function rps(GameArray) {
  let ganador = null,
    partida = null,
    j1 = 0,
    j2 = 0,
    e = 0;

  // Obtiene la victoria de cada sesion
  GameArray.forEach((element) => {
    partida = resultado(element);
    if (partida == 1) j1++;
    if (partida == 2) j2++;
    if (partida == "E") e++;
  });

  // Decide el ganador
  if (j1 > j2 && j1 > e) ganador = "J1";
  if (j2 > j1 && j2 > e) ganador = "J2";
  if (e > j1 && e > j2) ganador = "Empate";

  console.log(ganador);
}

// Verifica que ganador obtiene la victoria de la sesion
function resultado(jugada) {
  var resultado;
  //"R" (piedra), "P" (papel) o "T" (tijera).
  switch (jugada[0] + jugada[1]) {
    case "RT":
    case "TP":
    case "PR":
      resultado = "1";
      break;
    case "TR":
    case "PT":
    case "RP":
      resultado = "2";
      break;
    case "PP":
    case "TT":
    case "RR":
      resultado = "E";
      break;
    default:
      break;
  }

  return resultado;
}
