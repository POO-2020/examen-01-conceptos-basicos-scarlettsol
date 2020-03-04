export default class Huesped {
    /**
     * 
     * @param {string} nombre Nombre completo del huésped
     * @param {string} genero Masculino o femenino
     */
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    getDescripcion() {
        if (this.genero == "femenino") {
        return (`${this.nombre} (femenino)`)
    } return (`${this.nombre} (masculino)`);
    }
}