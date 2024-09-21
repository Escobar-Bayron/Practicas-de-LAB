const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function verificarEdad(edad) {
    if (edad >= 0 && edad <= 12 ) {
        return 'La persona es un niño'
    } else if (edad >= 13 && edad <= 17){
        return 'La persona es un adolescente'
    }else if (edad >= 18 && edad <= 35){
        return 'La persona es un adulto joven'
    }else if (edad >= 36 && edad <= 59){
        return 'La persona es un adulto'
    }else if (edad >= 60 && edad <=100){
        return 'La persona es un adulto mayor'
    }else if (edad > 100){
        return '¿Matusalén, eres tú? 😲'
    }else {
        return 'Edad no valida'
    }
}

rl.question('Ingrese su edad: ',(edad)=>{
    let edadVerificada = verificarEdad(edad)
    console.log(edadVerificada)
    rl.close()
})
