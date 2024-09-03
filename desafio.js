let fechaNacimiento = new Date(Date.UTC(2004, 6, 24));

let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
let diaSemana = diasSemana[fechaNacimiento.getUTCDay()];

let dia = fechaNacimiento.getUTCDate();

let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let mes = meses[fechaNacimiento.getUTCMonth()];

console.log(`Naciste un ${diaSemana} ${dia} de ${mes}`);