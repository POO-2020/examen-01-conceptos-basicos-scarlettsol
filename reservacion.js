import Huesped from "./huesped.js";

export default class Reservacion {
    /**
     * 
     * @param {number} numeroHabitacion 
     * @param {new Date} fechaLlegada 
     * @param {number} noches 
     * @param {Huesped} huespedes 
     */
    constructor(numeroHabitacion, fechaLlegada, noches, huespedes) {
        this.numeroHabitacion = numeroHabitacion;
        this.fechaLlegada = new Date(dia, mes-1, año);
        this.noches = noches;
        this.huespedes = new Array();
    }

    getFechaFormatoCorto() {
        return (`${this.fechaLlegada.getDate()}/${this.fechaLlegada.getMonth()+1}/${this.fechaLlegada.getFullYear()}`);
    }

    addHuesped(Huesped) {
        this.huespedes.push(Huesped)
    }

    getNumHuespedes() {
        this.huespedes.forEach((Huesped, i) => {
            console.log(`${i} ${Huesped.getDescripcion()}`)
        });
    }

    print() {
        return (` Habitación n° ${this.numeroHabitacion}
        Fecha de llegada: ${this.getFechaFormatoCorto()}
        ${this.noches} noches reservadas
        Huéspedes: ${this.huespedes}`);
    }
}

let r1 = new Reservacion(1456, new Date(25, 2, 2020), 3, ("Marian Ramírez", "Quetzalli Ruiz"));
console.log(r1.print());