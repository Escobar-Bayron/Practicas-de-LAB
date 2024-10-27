class CuentaBancaria {
    constructor(saldo) {
      this._saldo = saldo;
    }
  
    // Getter para obtener el saldo actual
    get saldo() {
      return this._saldo;
    }
  
    // Setter para modificar el saldo, asegurando que no sea negativo
    set saldo(cantidad) {
      if (cantidad > 0) {
        this._saldo = cantidad;
      } else {
        console.log(`Saldo: $${cantidad}, no se puede establecer un saldo negativo.`);
      }
    }
  }
  const cuenta = new CuentaBancaria(1000); // Saldo inicial de 1000
  console.log(`Saldo inicial: $${cuenta.saldo}`); // 1000
  
  cuenta.saldo = 500; // Cambiando el saldo a 500
  console.log(`Movimiento: $${cuenta.saldo}`); // 500
  
  cuenta.saldo = -200; // Intentando poner un saldo negativo
  // Mensaje: "No se puede establecer un saldo negativo."
  console.log(`Saldo actual: $${cuenta.saldo}`); // El saldo sigue siendo 500
  