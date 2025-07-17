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
    this.barraDeVida = 100;
  }

  reparar(



    generador) {
    for (let i = 0; i < 100; i++) {
      generador.estado = generador.estado + 1;
    }
    if (generador.estado === 100) {
      consonselect.log("Generador Reparado" + generador.estado);
    }
  }

  descolgarDelGancho(){

  }

  curarSobreviviente() {}

  usarObjeto() {}

  abrirPuertaDeSalida() {}
}

class Asesino extends personaje {
  constructor(poder, arma) {
    super(nombre, accesorios, ofrenda, habilidades);
    arma = this.arma;
    this.cooldown = 30;
    porder = this.poder;
  }

  golpear() {}
  usarHabilidad() {}

  sabotear() {}

  agarrarSobreviviente() {}

  colgarSobreviviente() {}
}
