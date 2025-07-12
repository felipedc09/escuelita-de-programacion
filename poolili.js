
//////-------------------------------------------------------
// CamelCase -> EstaDeSalud -> C# Java
// SnakeCase -> esta_de_salud -> Python
// lowerCamelCase -> estaDeSalud -> JavaScript
// ----------------------------------------------------------
class Superviviente {
  constructor(nombre, estado_de_salud) {
    this.nombre = nombre
    this.estado_de_salud = estado_de_salud
  }

  reparar(mensaje) {
    if (this.estado_de_salud !== 0) {
      console.log(this.nombre + ' esta reparando')
      console.log(mensaje)
    } else {
      console.log(this.nombre + ' no puede reparar')
    }
  }

  curar(mensaje) {
    if (this.estado_de_salud !== 0) {
      console.log(this.nombre + ' esta curando')
      console.log(mensaje)
    } else {
      console.log(this.nombre + ' no puede curar')
    }
  }
}
//////////

class Curandero extends Superviviente {
  constructor(nombre, estado_de_salud) {
    super(nombre, estado_de_salud)
    this.habilidad = 'botiquin'
  }

  reparar() {
    const mensaje = this.nombre + ' explota el motor por que tiene: ' + this.habilidad
    super.reparar(mensaje)
  }

  curar() {
    const mensaje = this.nombre + ' cura mas rapido con: ' + this.habilidad
    super.curar(mensaje)
  }
}

//////////
class Reparador extends Superviviente {
  constructor(nombre, estado_de_salud) {
    super(nombre, estado_de_salud)
    this.habilidad = 'herramientas'
  }

  reparar() {
    const mensaje = this.nombre + ' repara en silencio con: ' + this.habilidad
    super.reparar(mensaje)
  }

  curar() {
    const mensaje = this.nombre + ' cura más lento por que tiene: ' + this.habilidad
    super.curar(mensaje)
  }
}

const mateo = new Reparador('mateo', 0)
const tintin = new Curandero('tintin', 0)
const liliana = new Reparador('liliana', 0)


mateo.curar()
tintin.curar()
liliana.curar()
mateo.reparar()
liliana.reparar()
tintin.reparar()
