class partida{
    constructor(){}
    iniciar()
    enCurso()
    finalizar()
}


class Personaje {
  constructor(nombre, habilidades, ofrenda) {
    this.nombre = nombre;
    this.habilidades = habilidades;
    this.ofrenda;
  }
}

class habilidades{
    constructor(){
        this.nombre
        this.tiempoRecarga
        this.condicionRecarga
    }
    activacion()

}

class Asesino extends Personaje {
  constructor(accesorios) {
    super(nombre, habilidades, accesorios, ofrenda)
    this.accesorios=Poder
  }

  usarPoder(){}
  atacar(){}
  recogerSupreviviente(){}
  buscarArmario(){}
  matar()[]
}

class Superviviente extends Personaje {
    constructor(objeto){
    this.accesorio=objeto
    }
    reparar(){}
    curar(){}
    descolgarCompañero(){}
    usarObjeto(){}
    esconderseArmario(){}
    abrirPuertas(){}
}


// class Superviviente extends Personaje{

//   }

//   reparar(mensaje) {
//     if (this.estado_de_salud !== 0) {
//       console.log(this.nombre + " esta reparando");
//       console.log(mensaje);
//     } else {
//       console.log(this.nombre + " no puede reparar");
//     }
//   }

//   curar(mensaje) {
//     if (this.estado_de_salud !== 0) {
//       console.log(this.nombre + " esta curando");
//       console.log(mensaje);
//     } else {
//       console.log(this.nombre + " no puede curar");
//     }
//   }

// class Curandero extends Superviviente {
//   constructor(nombre, estado_de_salud) {
//     super(nombre, estado_de_salud);
//     this.habilidad = "botiquin";
//   }

//   reparar() {
//     const mensaje =
//       this.nombre + " explota el motor por que tiene: " + this.habilidad;
//     super.reparar(mensaje);
//   }

//   curar() {
//     const mensaje = this.nombre + " cura mas rapido con: " + this.habilidad;
//     super.curar(mensaje);
//   }
// }
