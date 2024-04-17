var lista = [];

function listarSouvenirs(nombre, costo, disponibilidad) {
  const souvenir = {
    nombre: nombre,
    costo: costo,
    disponibilidad: disponibilidad,
  };
  lista.push(souvenir);
}

while (true) {
  let descision = prompt("Quiere ingresar un souvenir? Si/No");
  if (descision == "Si" || descision == "si") {
    let nombre = String(prompt("Ingrese el nombre del souvenir"));
    let costo = Number(prompt("Ingrese el costo del souvenir"));
    let disponibilidad = prompt(
      "Ingrese la disponibilidad del souvenir (Si/No)"
    );
    if (disponibilidad == "Si" || disponibilidad == "si") {
      disponibilidad = true;
    } else {
      disponibilidad = false;
    }
    listarSouvenirs(nombre, costo, disponibilidad);
    console.log(lista);
  } else {
    break;
  }
}
