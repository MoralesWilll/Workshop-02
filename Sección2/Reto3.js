var pronosticoClima = "lluvia";
// var pronosticoClima = "sol";
// var espacioMaleta = 3;
var espacioMaleta = 2;
// var espacioMaleta = 1;
// var espacioMaleta = 0;
var pesoMaximo = 60;
// var pesoMaximo = 70;
// var pesoMaximo = 50;
var pesomaleta = 40;
// var pesomaleta = 45;
// var pesomaleta = 30;
var maleta = [];

function empacar (nombre, peso){
    const item = {
        nombre: nombre,
        peso: parseInt(peso),
    }
    maleta.push(item);
}

while (espacioMaleta != 0 && pesomaleta < pesoMaximo) {
    let nombre = prompt("Ingrese el nombre del objeto que quiere meter a la maleta");
    let peso = parseInt(prompt("Ingrese el peso del objeto que quiere meter a la maleta"));
    if((peso + pesomaleta) > pesoMaximo){
        prompt("El objeto es muy pesado")
    } else {
        empacar(nombre, peso);
        espacioMaleta = espacioMaleta - 1;
        console.log(espacioMaleta)
    }
}