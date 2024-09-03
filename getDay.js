let fechaActual = new Date();
console.log(fechaActual);

let diaSemana = fechaActual.getDay();
console.log(diaSemana);

let nombreDias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
console.log(nombreDias);

let nombreD = nombreDias[diaSemana];
console.log(nombreD);

console.log(`Hoy es: ${nombreD}`);
