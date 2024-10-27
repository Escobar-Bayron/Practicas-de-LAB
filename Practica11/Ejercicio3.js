class Clima {
    constructor(celsius) {
        this._celsius = celsius;
    }

    // Getter para obtener la temperatura en Fahrenheit
    get fahrenheit() {
        return (this._celsius * 9) / 5 + 32;
    }

    // Setter para asignar la temperatura en Fahrenheit
    set fahrenheit(fahrenheit) {
        this._celsius = ((fahrenheit - 32) * 5) / 9;
    }

    // Getter y setter para la temperatura en Celsius
    get celsius() {
        return this._celsius;
    }
    set celsius(celsius) {
        this._celsius = celsius;
    }
}

const clima = new Clima(25);

console.log(`Clima en grados Fahrenheit: ${clima.fahrenheit}°F`);
console.log(`Clima en grados celcius: ${clima.celsius}°C`);