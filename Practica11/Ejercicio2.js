class Persona {
    constructor(nombre, apellido) {
        // Propiedades privadas
        this._nombre = nombre;
        this._apellido = apellido;
    }

    // Método getter para obtener el nombre completo
    get nombreCompleto() {
        return `${this._nombre} ${this._apellido}`;
    }

    // Método setter para asignar el nombre completo
    set nombreCompleto(nombreCompleto) {
        [this._nombre, this._apellido] = nombreCompleto.split(" ");
    }
}

const persona = new Persona("Yancy", "Alfaro");
// Usando el setter para modificar el nombre completo
persona.nombreCompleto = "Margarita Hernández";
// Usando el getter para obtener el nuevo nombre completo
console.log(persona.nombreCompleto);
