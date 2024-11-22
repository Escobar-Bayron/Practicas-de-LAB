// Definición de la clase Ciclista
class Ciclista {
    constructor(distanciaRecorrida) {
        this._distanciaRecorrida = distanciaRecorrida;
    }

    get distanciaRecorrida() {
        if (this._distanciaRecorrida > 0) {
            console.log("El ciclista está en movimiento.");
        } else if (this._distanciaRecorrida === 0) {
            console.log("El ciclista está actualmente parado.");
        }
    }

    set distanciaRecorrida(new_distance) {
        if (new_distance >= 0) {
            this._distanciaRecorrida = new_distance;
            console.log(`Nuevo valor asignado a la distancia del recorrido = ${new_distance}`);
        } else {
            console.log("El valor de distancia recorrida debe ser mayor a -1.");
        }
    }
}

// Crear una instancia de la clase Ciclista con una distancia recorrida inicial de 1
const Ciclista1 = new Ciclista(1);

// Cambiar la distancia recorrida a 0
Ciclista1.distanciaRecorrida = 0; // Se ejecuta el setter
Ciclista1.distanciaRecorrida; // Se ejecuta el getter, debería mostrar "El ciclista está actualmente parado."

// Cambiar la distancia recorrida a 10
Ciclista1.distanciaRecorrida = 10; // Se ejecuta el setter

// Intentar establecer una distancia recorrida a -1 (valor inválido)
Ciclista1.distanciaRecorrida = -1; // Se ejecuta el setter, debería mostrar un mensaje de error

// Verificar nuevamente la distancia recorrida
Ciclista1.distanciaRecorrida; // Se ejecuta el getter, debería mostrar "El ciclista está en movimiento."

