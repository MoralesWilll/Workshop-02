var opcion = prompt("Elige un destino: 1 para Santa Marta, 2 para San Andrés, 3 para Cartagena");
var presupuesto = prompt("Ingresa el presupuesto");
var cantidad_dias = prompt("ingresa el numero de días");
var precio_dia;

while(true){
    if(opcion == 1){
        let destino = "Santa Marta";
        var precio_dia = 250000;
        if(precio_dia*cantidad_dias>presupuesto){
            alert("Considera ajustar el presupuesto o el tiempo de viaje")
            break
        }
        else {
            alert("El presupuesto es suficiente")
            break
        }
    }
    else if (opcion == 2){
        let destino = "San Andreś";
        var precio_dia = 300000;
        if(precio_dia*cantidad_dias>presupuesto){
            alert("Considera ajustar el presupuesto o el tiempo de viaje")
            break
        }
        else {
            alert("El presupuesto es suficiente")
            break
        }
    }
    else if (opcion == 3){
        let destino = "Cartagena";
        var precio_dia = 200000;
        if(precio_dia*cantidad_dias>presupuesto){
            alert("Considera ajustar el presupuesto o el tiempo de viaje")
            break
        }
        else {
            alert("El presupuesto es suficiente")
            break
        }
    }
}