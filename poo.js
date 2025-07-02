// hacer el desuyuno

// serHumano *
// cocina *
// utencilios de cocina *
// estufa
// sartén
// losa
// viveres *
// huevos
// pan
// juguito
// fruta
// aceite

class Humano {
  constructor(nombre) {
    this.nombre = nombre;
  }

  cocinarDeMateo(ingredientes, utensilios) {
    console.log('cocinando con los siguientes ingredientes:', ingredientes);
    console.log('usando los siguientes utensilios:', utensilios);
    return 'desayuno listo';
  }

  cocinarDeLili(receta, ingredientes) {
    for (let i = 0; i < receta.length; i++) {
      for (let j = 0; j < ingredientes.length; j++) {
        if (!ingredientes[j].includes(receta[i])) {
          console.log(`No se puede cocinar ${receta[i]} porque no hay ${ingredientes[j]}.`);
          return
        }
      }
    }
    return `Receta ${receta} cocinada con los ingredientes ${ingredientes}.`;
  }

  comer(comida) {
    console.log(`${this.nombre} está comiendo ${comida}.`);
  }

  dormir(horas) {
    console.log(`${this.nombre} está durmiendo por ${horas} horas.`);
  }

  hablar(mensaje) {
    console.log(`${this.nombre} dice: "${mensaje}"`);
  }
}


class Cocina {
  constructor() {
    this.utensilios = ["estufa", "sartén", "losa"];
    this.viveres = ["huevos", "pan", "juguito", "fruta", "aceite", "sal"];
  }

  perderViveres(viveres) {
    for (let i = 0; i < viveres.length; i++) {
      for (let j = 0; j < this.viveres.length; j++) {
        if (viveres[i] === this.viveres[j]) {
          this.viveres.splice(j, 1);
        }
      }
    }
  }
}

const mateo = new Humano("Mateo");
mateo.comer("huevos");
const lili = new Humano("Lili");
lili.dormir(8);

const cocinaDeLili = new Cocina();
const cocinaDeMateo = new Cocina();

console.log("Utensilios en la cocina de Lili:", cocinaDeLili.utensilios);
console.log("Viveres en la cocina de Lili:", cocinaDeLili.viveres);
cocinaDeLili.perderViveres(["huevos", "fruta"]);
console.log("Viveres en la cocina de Lili después de perder algunos:", cocinaDeLili.viveres);

cocinaDeMateo.perderViveres(["huevos"]);
console.log("Viveres en la cocina de Mateo después de perder algunos:", cocinaDeMateo.viveres);


const desayunoDeMateo = mateo.cocinarDeMateo("huevos", "estufa");
console.log(desayunoDeMateo);

const recetaHuevosTocino = ["huevos", "sal", "tocino"];
const desayunoLili = lili.cocinarDeLili(recetaHuevosTocino, cocinaDeLili.viveres);