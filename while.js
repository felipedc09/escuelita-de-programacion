function main() {
  let siHayGente = true;
  let calificacion = 3;

  while (calificacion < 5) {
    console.log("calificacion: ", calificacion)
    console.log(calificacion < 5)
    console.log("desjuiciado")
    estudiar();
  }

  console.log("se gana el premio que le da la mama")

  function estudiar(){
    console.log("me pongo en modo estudio")
    calificacion++  // incrementa la calificación en 1
    console.log("nueva calificacion: ", calificacion)
  }
}
// pensar siempre en la condición de salida cuando hay un ciclo
// pilas con los ciclos infinitos

main()