// hacer el desuyuno

// serHumano
// cocina
// huevos
// pan
// estufa
// sartén
// utencilios de cocina
// losa
// juguito
// fruta
// aceite

class Humano {

  this.nombre

  constructor(nombre) {
    this.nombre = nombre;
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

const mateo = new Humano("Mateo");
mateo.comer("huevos");
const lili = new Humano("Lili");
lili.dormir(8);