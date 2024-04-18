var nivelEnergia = parseInt(prompt("Cuanta energía tienes entre 0 y 10"));
var buenClima = prompt("Oprima una tecla y enter si hay buen clima");
var cargaTrabajo = parseInt(prompt("Cuanto trabajo tienes pendiente entre 0 y 10"));

if (cargaTrabajo){
    let actividad = "trabajar";
    console.log(actividad);
}
else if(buenClima){
    if(nivelEnergia){
        let actividad = "salir a correr";
        console.log(actividad);
    } else {
        let actividad = "dia libre";
        console.log(actividad);
    }
}
else {
    let actividad = "dormir todo el día";
    console.log(actividad);
}
