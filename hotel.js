import Reservacion from "./reservacion.js";

export default class Hotel {
    /**
     * 
     * @param {string} nombreHotel 
     * @param {Reservacion} reservaciones 
     */
    constructor(nombreHotel, reservaciones) {
        this.nombreHotel = nombreHotel;
        this.reservaciones = reservaciones;
    }

    getNumHuespedes() {

    }

    print() {
        return (`${this.reservaciones.print()}`);
    }
}