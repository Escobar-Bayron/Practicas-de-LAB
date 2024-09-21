function solicitarDatosDelServidor() {
    return new Promise((resolve, reject) =>{
        let exito = true;

        setTimeout(() => {
            if (exito) {
                resolve({
                    id: 1,
                    nombre: "Bayron Guevara",
                    edad: 20,
                });
            } else {
                reject("error al obtener los datos del servidor");
            }
        }, 2000);
    });
}

solicitarDatosDelServidor()
.then((datos) => {
    console.log("Datos recibidos:", datos);
})
.catch((error) => {
    console.error(error);
});