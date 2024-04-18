var presupuesto = parseInt(prompt("Ingrese el presupuesto del día"));
var ahorro = parseInt(prompt("Ingrese la meta de ahorro de hoy"));
var libro = parseInt(prompt("Ingrese el costo del libro"));
var comida = parseInt(prompt("Ingrese el costo de la comida"));

if (presupuesto - ahorro < 0){
    alert("No te alcanza para  ahorrar hoy")
}else if (presupuesto - (ahorro + libro) < 0 || presupuesto - (ahorro + comida) < 0 ){
    if (presupuesto - (ahorro + libro) < 0 && presupuesto - (ahorro + comida) < 0 ) {
        alert("No te alcanza para comer afuera y comprar el libro hoy")
    }else if (presupuesto - (ahorro + libro) < 0){
            alert("No te alcanza para comprar el libro hoy")
    }else if (presupuesto - (ahorro + comida)< 0){
            alert("No te alcanza para comer afuera hoy")
    }
}else if(presupuesto - (ahorro + comida + libro) > 0){
    alert("Hoy te alcanza para todo")
}