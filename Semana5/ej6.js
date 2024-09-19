let categoriaDeCliente = 'VIP';
let totalCompra = 80;

function aplicarDescuento(categoria, totalCompra) {
    let descuento;

    switch (categoria) {
        case 'Basica':
            descuento = 0.05;
            break;
        case 'Estandar':
            descuento = 0.10;
            break;
        case 'VIP':
            descuento = 0.20;
            break;
        default:
            console.log('Categoría no válida');
            return totalCompra; 
    }

    let totalConDescuento = totalCompra - (totalCompra * descuento);
    return totalConDescuento;
}



let totalFinal = aplicarDescuento(categoriaDeCliente, totalCompra);

console.log(`Total después del descuento: $${totalFinal}`);
