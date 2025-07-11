class computador {
  constructor(marca, pantalla, chasis, teclado, mouse, bocinas, os, programas) {
      console.log("===", marca)
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
        console.log("Al apretar el boton de encendido se ejecuta el OS: " + this.os )

    }

    jugarJueguitos() {
        console.log("Se ejecuta el jueguito")
    }

    navegarEnInternet(){
        console.log("Se ejecuta: ")
    }

    usarOffice(){
        console.log("Se ejecuta microsoft office")
    }

}


class portatil extends computador {
    constructor(marca, patalla, chasis, teclado, mouse, bocinas, os, programas){
      super(marca, patalla, chasis, teclado, mouse, bocinas, os, programas)
      this.portatil = true
    }


    encenderElCompudor(){
        console.log("Al apretar el boton de encendido se ejecuta el OS: " + this.os )

    }

    jugarJueguitos(){
        console.log("Se ejecuta el jueguito")
    }

    navegarEnInternet(){
        console.log("Se ejecuta :")
    }

    usarOffice(){
        console.log("Se ejecuta microsoft office")
    }

    llevarATodasPartes(portatil){
        if(portatil)
            console.log("llevelo en la maleta")
    }

    }



const computadorGamer1 = new computador("dell", "assus,", "iceberg", "VSG", "logitech", "LG", "Windows", ["Chrome", "Brawhalla","Word", "Excel"])
const portatilGamer1 = new portatil("dell", "assus,", "iceberg", "VSG", "logitech", "LG", "Windows", ["Chrome", "Brawhalla","Word", "Excel"])

computadorGamer1.encenderElCompudor()
computadorGamer1.jugarJueguitos()
computadorGamer1.navegarEnInternet()
