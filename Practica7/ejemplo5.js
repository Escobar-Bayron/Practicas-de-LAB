const persona = {
    nombre: "John",
    edad: 36,
    ciudad: "Black Water"
};

for (let propiedad in persona){
    console.log(`${propiedad}: ${persona[propiedad]}`)
}