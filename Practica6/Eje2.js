let numeroMes = 4;
let nombreMes = "";

switch (numeroMes) {
    case 1:
        nombreMes = "Enero";
        break;
    case 2:
        nombreMes = "Febrero";
        break;
    case 3:
        nombreMes = "Marzo";
        break;
    case 4:
        nombreMes = "Abril";
        break;
    default:
        nombreMes = "Mes no válido";
        break;
}

console.log("El mes es: " + nombreMes);
