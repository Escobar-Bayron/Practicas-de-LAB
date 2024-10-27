class Persona {
    constructor(nombre, apellido) {
        // Propiedades privadas
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombreCompleto() {
        return `${this._nombre} ${this._apellido}`;
    }
}

const persona = new Persona("Yancy", "Alfaro");
console.log(persona.nombreCompleto);
