const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Generar un número aleatorio entre 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let adivinado = false;

function solicitarAdivinanza() {
    readline.question("Adivina el número entre 1 y 100: ", (input) => {
        const numeroIngresado = parseInt(input);
        intentos++;

        if (isNaN(numeroIngresado)) {
            console.log("Por favor, ingresa un número válido.");
            solicitarAdivinanza();
        } else if (numeroIngresado < numeroAleatorio) {
            console.log("Demasiado bajo. Intenta de nuevo.");
            solicitarAdivinanza();
        } else if (numeroIngresado > numeroAleatorio) {
            console.log("Demasiado alto. Intenta de nuevo.");
            solicitarAdivinanza();
        } else {
            console.log(`¡Correcto! El número era ${numeroAleatorio}.`);
            console.log(`Adivinaste en ${intentos} intentos.`);
            readline.close();
        }
    });
}

solicitarAdivinanza();
