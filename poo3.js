
//////-------------------------------------------------------
class superviviente {
  constructor(nombre, estado_de_salud) {
    this.nombre = nombre
    this.estado_de_salud = estado_de_salud
  }

  reparar() {
    if (!this.estado_de_salud===0) {
      console.log(this.nombre + 'esta reparando')
    }
  }

  curar() {
    this.estado_de_salud++
    console.log(this.nombre + ` esta curando`)
  }
}
//////////

class curandero extends superviviente {
  constructor(nombre,estado_de_salud) {
    super(nombre, estado_de_salud)
    this.habilidad = 'botiquin'

  }

  reparar() {
    super.reparar(this.estado_de_salud)
    console.log(this.nombre + ' explota el motor por que tiene: ' + this.habilidad)
  }

  curar() {
    super.curar()
    this.estado_de_salud++
    console.log(this.nombre + ' cura mas rapido con: '+ this.habilidad)
  }
}

//////////
class reparador extends superviviente{
  constructor(nombre, estado_de_salud) {
    super(nombre, estado_de_salud)
    this.habilidad = 'herramientas'

  }

  reparar() {
    super.reparar(this.estado_de_salud)
    console.log(this.nombre + ' repara en silencio con: '+this.habilidad)
  }
  curar() {
    super.curar()
    console.log(this.nombre + ' cura más lento por que tiene: '+ this.habilidad)
  }
}


const mateo = new reparador('mateo', 2)
const tintin = new curandero('tintin', 3)
const liliana = new reparador('liliana', 0)


mateo.reparar ()
tintin.reparar()
liliana.reparar()
tintin.curar()
mateo.curar()