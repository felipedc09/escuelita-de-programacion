// Functions
// function nombreDeLaFunction(inputs/parametros) {
//   // Código de la función
//   return "Resultado de la función";
// }

// Tipos de datos
const numero = 10; // Number
const texto = "Hola, mundo"; // String

let esFeliz = ""; // String - false
esFeliz = "a"; // String - true
esFeliz = 0; // number - false
esFeliz = 1; // number - true
esFeliz = false; // Boolean - false
esFeliz = true; // Boolean - true


if (esFeliz) {
  console.log("¡Estoy feliz!");
}

// int numeroEntero = 5; // Integer
// float numeroDecimal = 3.14; // Float
// double numeroDoble = 2.71828; // Double
// boolean esVerdadero = true; // Boolean
// char caracter = 'A'; // Character
// String textoLargo = "Este es un texto largo que puede contener múltiples líneas y caracteres especiales como ñ, á, é, í, ó, ú.";
// Array < string > lista =["1", "2", "3", "4", "5"]; // Array



// Definir una función

// implementar una función

// Ejecutar/usar una función

function main() {
  /////////////////////////////////////////////////////////////////

  // const retornoDeLAFuncion = ejecucionDeLaFunction(parametros)
  // console.log(retornoDeLAFuncion)

  function identificarNecesidades(nombresClientes) {
    const necesidades = []
    for (let i = 0; i < nombresClientes.length; i++) { //i = i + 1
      console.log("Identificar necesidad de cliente: " + nombresClientes[i]);
      necesidades[i] = "necesidad " + nombresClientes[i];
    }
    return necesidades
  }

  //verbo
  function conocerElProblema(negocio){
    console.log("estudair el negocio: " + negocio)
    console.log("revisar estado actual")
    console.log("definir como quiero que funcione")
  }

  //Divide y venceras

  function plantearSoluciones(necesidades){
    const soluciones = []
    for (let index = 0; index < necesidades.length; index++) {
      console.log("hacer lluvia de ideas "+ necesidades[index])
      console.log("identificar limitaciones " + necesidades[index])
      soluciones[index] = necesidades[index] + " solucion"
    }
    return soluciones
  }

<<<<<<< HEAD
  function DesarrollarSoluciones(soluciones, diasDeDesarrollo) {
    const solucionesDesarrolladas = []
    for (let i = 0; i < soluciones.length; i++) {
      console.log("Se hace el desarrollo de la solución " + soluciones[i])
      solucionesDesarrolladas[i] = soluciones[i] + " solución desarrollada correctamente en:" + diasDeDesarrollo + "Días"
    }
    return solucionesDesarrolladas
  }

  function ProbarSoluciones(solucionesDesarrolladas) {
    let estadoPrograma = true;
    for (let i = 0; i < solucionesDesarrolladas.length; i++) {
      if (solucionesDesarrolladas[i].includes("solución desarrollada correctamente")) {
        estadoPrograma = true;
        console.log("EN FUNCIONAMIENTO:" + solucionesDesarrolladas[i])
      } else {
        estadoPrograma = false;
        console.log("FALLIDO:" + solucionesDesarrolladas[i])
      }
    }
    return estadoPrograma
  }

  function createProgram() {
    const necesidades = identificarNecesidades(["Juan", "Maria"])
    conocerElProblema("ferreteria")
    const soluciones = plantearSoluciones(necesidades)
    const solucionesPorProbar = DesarrollarSoluciones(soluciones, 6)
    const estadoPrograma = ProbarSoluciones(solucionesPorProbar)
    if (estadoPrograma == false) {
      return
    }
    console.log("Depurar")
    console.log("Entregar")
=======
function (soluciones){
  if(
  
  function createProgram() {
    const necesidades = identificarNecesidades(["Juan", "Maria"])
      conocerElProblema("ferreteria")
      const soluciones = plantearSoluciones(necesidades)
      console.log("Desarrollar la solucion")
      console.log("Programar")
      console.log("Probar")
      console.log("Depurar")
      console.log("Probar")
      console.log("Entregar")
>>>>>>> bd92aee666cdf4a0917484c1d2f0bdbac9a5c639
  }
  //proceso diferentes para crear un programa
  createProgram()
}

main()
