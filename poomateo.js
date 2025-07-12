class Computador {
  constructor(marca, pantalla, chasis, teclado, mouse, bocinas, os, programas) {
    this.marca = marca
    this.patalla = pantalla
    this.chasis = chasis
    this.teclado = teclado
    this.mouse = mouse
    this.bocinas = bocinas
    this.os = os
    this.programas = programas
  }

  encenderElCompudor() {
    console.log("Al apretar el boton de encendido se ejecuta el OS: " + this.os)
  }

  jugarJueguito() {
    const jueguito = "Brawhalla"
    for (let i = 0; i < this.programas.length; i++) {
      if (this.programas[i] === jueguito)
        console.log("Se ejecuta el " + this.programas[i])
      else {
        console.log("No hay jueguitos")
      }
    }
  }

  navegarEnInternet() {
    console.log("Se ejecuta: chrome ")
  }

  usarOffice() {
    console.log("Se ejecuta microsoft office")
  }

}


class Portatil extends Computador {
  constructor(marca, patalla, chasis, teclado, mouse, bocinas, os, programas) {
    super(marca, patalla, chasis, teclado, mouse, bocinas, os, programas)
    this.portatil = true
  }

  jugarJueguito() {
    console.log("Se ejecuta el jueguito")
  }

  navegarEnInternet() {
    console.log("Se ejecuta")
  }

  llevarATodasPartes() {
    console.log("llevelo en la maleta")
  }
}

const computadorGamer1 = new Computador("dell", "assus,", "iceberg", "VSG", "logitech", "LG", "Windows", ["Chrome", "Brawhalla", "Word", "Excel"])
const portatilGamer1 = new Portatil("dell", "assus,", "iceberg", "VSG", "logitech", "LG", "Windows", ["Chrome", "Brawhalla", "Word", "Excel"])

computadorGamer1.encenderElCompudor()
computadorGamer1.jugarJueguito()
portatilGamer1.jugarJueguito()

