const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let num;

function pedirNumero() {
    readline.question("Introduce un número mayor a 5: ", (input) =>{
        num = parseInt(input)
        if (num > 5){
            console.log(`Número valido: ${num}`);
            readline.close();
        }else{
            console.log("El número debde ser mayor a 5,");
            pedirNumero()
        }

    })
}

pedirNumero()