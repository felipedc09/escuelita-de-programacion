class Generador {
  constructor() {
    this.estado = 01;
  }
}

class Personaje {
  constructor(nombre, accesorios, ofrenda, habilidades) {
    nombre = this.nombre;
    accesorios = this.accesorios;
    ofrenda = this.ofrenda;
    habilidades = this.habilidades;
  }
}

class Sobreviviente extends Personaje {
  constructor(objeto) {
    super(nombre, accesorios, ofrenda, habilidades);
    objeto = this.objeto;
    this.golpesRecibidos = 0;
    this.colgadoEnElGancho = false;
    this.enElSuelo = false;
  }

  reparar(generador) {
    for (let i = 0; i < 100; i++) {
      generador.estado = generador.estado + 1;
    }
    if (generador.estado === 100) {
      consonselect.log("Generador Reparado" + generador.estado);
    }
  }

  caerAlSuelo() {
    if (this.golpesRecibidos === 2) {
      this.enElSuelo = true;
    }
  }

  descolgarDelGancho(sobreviviente) {
    if (sobreviviente.colgadoEnElGancho === true) {
      sobreviviente.colgadoEnElGancho = false;
    }
  }

  curarSobreviviente(sobreviviente) {
    if (
      sobreviviente.golpesRecibidos === 1 ||
      sobreviviente.golpesRecibidos === 2
    ) {
      sobreviviente.golpesRecibidos = sobreviviente.golpesRecibidos - 1;
    }
  }

  usarObjeto() {}

  abrirPuertaDeSalida(interruptor) {
    if (interruptor) {
      puertaDeSalida = true;
    }
  }
}

class Asesino extends personaje {
  constructor(poder, arma) {
    super(nombre, accesorios, ofrenda, habilidades);
    this.arma = arma;
    this.cooldown = 30;
    this.poder = porder;
    this.sobreviviente = null;
  }

  golpear(arma, sobreviviente, poder) {
    sobreviviente.golpesRecibidos = sobreviviente.golpesRecibidos + 1;
  }

  usarHabilidad() {}

  sabotearGenerador(generador){
    if(generador.estado>1){
for(let i = generador.estado; generador.estado===0){

}
    }
  }

  agarrarSobreviviente(sobreviviente) {
    if ((sobreviviente.enElSuelo = true)) {
      this.sobreviviente = sobreviviente;
    }
  }

  colgarSobreviviente() {
    if (this.sobreviviente) {
      this.sobreviviente.colgadoEnElGancho = true;
      this.sobreviviente = null;
    }
  }
}
