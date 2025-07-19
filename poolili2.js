class partida{
    constructor(play){
      if (this.play=true){

      }
    }

    enCurso()
    finalizar()
}


class Equipacion {
  constructor(nombre, habilidades, ofrenda) {
    this.nombre = nombre;
    this.habilidades = habilidades;
    this.ofrenda= ofrenda
  }
}

class habilidades{
    constructor(nombre,tiempoRecarga,condicion){
        this.nombre
        this.tiempoRecarga

    activacion(){}
    recargarse(){}
    }

class Asesino extends Equipacion {
  constructor(accesorios) {
    super(nombre, habilidades, accesorios, ofrenda)
    this.accesorios=Poder
  }

  atacar(Superviviente){
    if(Superviviente.golpes!==2){
    Superviviente.golpes++
    console.log (this.nombre " ataca a " Superviviente.nombre)
  }
  }

  recogerSupreviviente(Superviviente){
    if(Superviviente.golpes===2){
      Superviviente.estado='atrapado'
      console.log ('cargando a ' Superviviente.nombre)
    }
  }

  colgar(Superviviente){
    if(Superviviente.estado==='atrapado'){
      Superviviente.estado='colgado'
      Superviviente.cuelgue++
      console.log ('colgando a ' Superviviente.nombre)
    }
  }

  buscarEnArmario(Superviviente){
    if(Superviviente.estado==='escondido'){
      Supereviviente.estado='atrapado'
    }
  }

  matar(Superviviente){

    if(Superviviente.golpes===2 && Superviviente.cuelgue===2 && this.ofrenda==='memento'){
      console.log(this.nombre + ' ha matado a ' + Superviviente.nombre)
      Superviviente.estado='muerto'
    }
    }
}

class Superviviente extends Equipacion {

// estados del Superviviente:activo,herido,agonizante,atrapado,colgado.escondido

    constructor(objeto,golpes){
    this.accesorio=objeto
    this.golpes=0
    this.estado='activo'
    this.cuelgue=0
    }

    reparar(){

    }
    curar(){}
    if (golpes!==3, estado='activo'){
      golpes++
    }

    descolgarCompañero(){}

    usarObjeto(){}
    esconderseArmario(){}
    abrirPuertas(){}

    morir(){


      if(this.cuelgue=3){
        console.log(this.nombre + 'esta muerto')
      }
    }
}



