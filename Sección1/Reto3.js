var presupuesto = 5000000;
var colchon = 250000;
var precioViaje = parseInt(prompt("Cuanto vale el viaje"));
var listaExtra = [];

function extra(nombre, costo){
    const extraO = {
        nombre: nombre,
        costo: parseInt(costo),
    }
    listaExtra.push(extraO);
}

while(true){
    var extras = prompt("Desea ingresar un objeto extra?");
    if(extras == "No" || extras == "no"){
        break
    }else {
        let nombreExtra =prompt("Ingrese el nombre del extra");
        let costoExtra = prompt("Ingrese el costo del extra");
        extra(nombreExtra, costoExtra);
    }
}

console.table(listaExtra);
var item = prompt(`Que objeto extra quiere llevar? 0 - ${listaExtra.length - 1}`);
var gastos = precioViaje + colchon + listaExtra[item].costo;
var resta = presupuesto - gastos;
if( resta <  0 ){
    prompt("No alcanza la plata")
    listaExtra.forEach (extraitem => {
        if(presupuesto - (precioViaje + colchon + extraitem.costo) > 0) {
            prompt(`considera comprar el extra ${extraitem.nombre}`);
        }
    })
}
else {
    prompt("Si alcanza la plata");
}