const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarVocalesYDígitos(cadena) {
    let contadorVocales = 0;
    let contadorDígitos = 0;
    const vocales = 'aeiouAEIOU';

    for (let char of cadena) {
        if (vocales.includes(char)) {
            contadorVocales++;
        } else if (!isNaN(char) && char !== ' ') {
            contadorDígitos++;
        }
    }

    console.log(`Número de vocales: ${contadorVocales}`);
    console.log(`Número de dígitos: ${contadorDígitos}`);
}

function solicitarCadena() {
    readline.question("Introduce una cadena de texto: ", (input) => {
        if (input.trim().length === 0) {
            console.log("La cadena no debe estar vacía. Inténtalo de nuevo.");
            solicitarCadena();
        } else {
            contarVocalesYDígitos(input);
            readline.close();
        }
    });
}

solicitarCadena();
