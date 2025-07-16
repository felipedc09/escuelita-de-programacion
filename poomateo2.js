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
    super(nombre, accesorios, ofrenda, habilidades)
    objeto= this.objeto
    this.barraDeVida = 100;
  }

  reparar(){

  }

  descolgarDelGancho(){

  }

  curarSobreviviente(){

  }

  usarObjeto(){

  }

  abrirPuertaDeSalida(){

  }

}

class Asesino extends personaje {
    constructor(poder){
        super(nombre, accesorios, ofrenda, habilidades)
        this.cooldown = 30
        porder = this.poder
    }

    golpear(){

    }
    usarHabilidad(){

    }

    sabotear(){

    }

    agarrarSobreviviente(){

    }

    colgarSobreviviente(){

    }


}
