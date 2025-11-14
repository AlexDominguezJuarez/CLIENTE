const exploradores = [
  { nombre: "Ana", objetos: new Set(["linterna", "mapa", "agua", "mapa"]) },
  { nombre: "Luis", objetos: new Set(["cuerda", "agua", "brújula"]) },
  { nombre: "Marta", objetos: new Set(["linterna", "cuerda", "comida"]) }
];

function mostrarInventario(exploradores) {
  for (let i = 0; i < exploradores.length; i++) {
    let nombre = exploradores[i].nombre;
    let objetos = Array.from(exploradores[i].objetos);
    console.log("Nombre del explorador: " + nombre + " Objetos que lleva: " + objetos);
  }
}
mostrarInventario(exploradores);

function mostrarInventarioConjunto(exploradores) {
  let inventarioConjunto = new Set();
  for (let i = 0; i < exploradores.length; i++) {
    for (let objeto of exploradores[i].objetos) {
      inventarioConjunto.add(objeto);
    }
  }
  console.log(inventarioConjunto);
}
mostrarInventarioConjunto(exploradores);

