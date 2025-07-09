// POO - programacion orienta a objetos
// - herencia
// - polimorfismo
// - ecapsulamiento

// - Herencia
// ---------------------

class Mascota {
  constructor(nombre) {
    this.nombre = nombre
  }

  tenerHambre() {
    console.log(this.nombre + ": pide comida")
  }

  pedirAmor() {
    console.log(this.nombre + " : recibir cariño")
  }
}

class Gato extends Mascota {
  constructor(nombre, osico, patas, pelaje, cola) {
    super(nombre)
    this.osico = osico
    this.patas = patas
    this.pelaje = pelaje
    this.cola = cola
  }

  pedirAmor() {
    this.maullar()
    this.restregarseContraCosas()
    super.pedirAmor()
  }

  maullar() {
    console.log(this.nombre + ' dice: miau miau')
  }

  restregarseContraCosas() {
    console.log(this.nombre + " se restriega")
  }
}

class Conejo extends Mascota {
  constructor(nombre, raza, color, edad) {
    super(nombre)
    this.raza = raza
    this.color = color
    this.edad = edad
  }

  tragar() {
    console.log("mtmtmtmmtmtmtm")
  }

  hacerBolitas() {
    console.log("plop")
  }

  patear() {
    console.log("tenga lo suyo")
  }

  pedirAmor() {
    console.log("agachar la cabecita")
    super.pedirAmor()
  }

  rebolotear() {
    console.log("dar vuelticas por donde uno")
  }

  morir() {
    console.log("vemos perros")
  }

}

const perseo = new Gato("perseo", "gordis", "cortas", "negro", "enroscada")
const maizena = new Gato("maizena", "delicado", "cortas", "manchada", "enroscada")
const haku = new Gato("haku", "cuadrado", "largas", "gris", "larga")
maizena.pedirAmor()
maizena.tenerHambre()
perseo.pedirAmor()
haku.pedirAmor()

const oki = new Conejo("oki", "belier", "gris", "70")
oki.pedirAmor()
oki.patear()
oki.tenerHambre()