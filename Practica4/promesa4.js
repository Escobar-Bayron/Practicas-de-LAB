function procesarPedido(pedido) {
    return new Promise((resolve, reject) => {
        console.log("Procesando pedido...");

        setTimeout(() => {
            const exito = Math.random() > 0.2;

            if (exito) {
                resolve({
                    mensaje: "Pedido realizado con éxito",
                    pedido: pedido
                });
            } else {
                reject("Error al procesar el pedido");
            }
        }, 3000);
    });
}

const miPedido = {
    id: 123,
    platillo: "Pizza",
    cantidad: 2
};

procesarPedido(miPedido)
    .then((resultado) => {
        console.log(resultado.mensaje);
        console.log("Detalles del pedido:", resultado.pedido);
    })
    .catch((error) => {
        console.error(error);
    });
