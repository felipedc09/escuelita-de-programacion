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

  cocinar(receta, cocina) {
    const ingredientes = cocina.viveres
    const utensilios = cocina.utensilios
    for (let i = 0; i < receta.ingredientes.length; i++) {
      for (let j = 0; j < ingredientes.length; j++) {
        if (ingredientes[j] === receta.ingredientes[i]) {
          break
        } else {
          const esElFinalDeLosIngredientes = j === ingredientes.length - 1;
          if (esElFinalDeLosIngredientes) {
            return `No se puede cocinar ${receta.nombre} porque no hay ${receta.ingredientes[i]}.`;
          }
        }
      }
    }
    return `Receta ${receta.nombre} cocinada con los ingredientes ${receta.ingredientes}, con utensilios ${utensilios} y quedan los siguientes viveres ${cocina.perderViveres(receta.ingredientes)}.`;
  }
}

class Receta {
  constructor(nombre, ingredientes) {
    this.nombre = nombre;
    this.ingredientes = ingredientes
  }
}

class Cocina {
  constructor(utensilios, viveres) {
    this.utensilios = utensilios;
    this.viveres = viveres;
  }

  perderViveres(viveres) {
    for (let i = 0; i < viveres.length; i++) {
      for (let j = 0; j < this.viveres.length; j++) {
        if (viveres[i] === this.viveres[j]) {
          this.viveres.splice(j, 1);
        }
      }
    }
    return this.viveres
  }
}

const mateo = new Humano("Mateo");
const lili = new Humano("Lili");

const cocinaDeLili = new Cocina(["estufa", "sartén", "losa"], ["huevos", "pan", "juguito", "fruta", "aceite", "sal"]);
const cocinaDeMateo = new Cocina(["estufa", "sartén", "losa"], ["francesas", "tostadas", "sal"]);

const recetaHuevosTocino = new Receta("Huevos con Tocino", ["huevos", "tocino", "sal"]);
const recetaHuevoPan = new Receta("Huevos con pan", ["huevos", "pan",
  "sal"
])
const recetaTostadasFrancesas = new Receta("Tostadas Francesas", ["tostadas", "francesas", "sal"
])

const desayunoMateo = mateo.cocinar(recetaTostadasFrancesas, cocinaDeMateo)
console.log(desayunoMateo)
const desayunoLili = lili.cocinar(recetaHuevoPan, cocinaDeLili);
console.log(desayunoLili)
