class partida{
    constructor(){}
   g
    enCurso()
    finalizar()
}


class Personaje {
  constructor(nombre, habilidades, ofrenda) {
    this.nombre = nombre;
    this.habilidades = habilidades;
    this.ofrenda=
  }
}

class habilidades{
    constructor(nombre,tiempoRecarga,condicion){
        this.nombre
        this.tiempoRecarga
        this.condicion
    }
    activacion(){

    }

class Asesino extends Personaje {
  constructor(accesorios) {
    super(nombre, habilidades, accesorios, ofrenda)
    this.accesorios=Poder
  }
  atacar(Superviviente){

    Superviviente.estadoSalud = Superviviente.estadoSalud-1
    console.log (this.nombre " ataca a " Superviviente.nombre)
  }

  recogerSupreviviente(viviente){
    if
  }

  buscarArmario(){}
  matar()[]
}

class Superviviente extends Personaje {
    constructor(objeto,estadoSalud){
    this.accesorio=objeto
    this.estadoSalud=3
    }
    reparar(){

    }
    curar(){}
    if (estadoSalud!==3){
      estadoSalud++
    }

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
