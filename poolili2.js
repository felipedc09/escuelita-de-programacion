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
      console.log ('cargando a '+ Superviviente.nombre)
    }
  }

  colgar(Superviviente){
    if(Superviviente.estado==='atrapado'){
      Superviviente.estado='colgado'
      Superviviente.cuelgue++
      console.log (this.nombre +' ha colgando a '+ Superviviente.nombre)
    }
  }

  buscarEnArmario(Superviviente){
    if(Superviviente.estado==='escondido' ||){
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

// estados del Superviviente:activo,herido,agonizante,atrapado,colgado.escondido
class Superviviente extends Equipacion {


    constructor(objeto,golpes){
    this.accesorio=objeto
    this.golpes=0
    this.estado='activo'
    this.cuelgue=0
    }

    reparar(){
      if(this.golpes!===2 && this.estado==='activo'){
      console.log(this.nombre + ' esta reparando')
      this.estado='reparando'
    }
    }

    curar(superviviente){
      if(this.golpes!===2  && this.estado==='activo' && superviviente.golpes!==0){
      console.log(this.nombre + ' esta curando a ' + superviviente.nombre)
      superviviente.golpes=superviviente.golpes-1

    }
  }

    descolgarCompañero(superviviente){
      if(this.golpes!===2 && this.estado==='activo' && superviviente.estado==='colgado'){
      console.log(this.nombre + ' descuelga a ' + superviviente.nombre)
      superviviente.golpes=superviviente.golpes-1
    }


    esconderseArmario(){
      if(Superviviente.golpes!===2 && Superviviente.estado===activo && ){
      console.log(this.nombre + ' se esconde en armario ')
      Superviviente.estado='escondido'

    }
    }

    abrirPuertas(){}

    morir(){
      if(this.estado==='colgado' && cuelgues===3){
      console.log(this.nombre + ' ha muerto en el gancho')
      this.estado='muerto'
    }
    }
}



