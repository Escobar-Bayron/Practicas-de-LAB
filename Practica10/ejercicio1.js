class Libro {
    constructor(titulo, autor, anio) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
    }

    resumen() {
        console.log(`'${this.titulo}' de ${this.autor}, publicado en ${this.anio}.`);
    }
}

const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);
libro1.resumen(); 
