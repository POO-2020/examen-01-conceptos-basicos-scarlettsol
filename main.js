import Huesped from "./huesped.js";
import Reservacion from "./reservacion.js";
import Hotel from "./hotel.js";

class Main {
    constructor() {
        this.nombreHospital = new nombreHotel("Four Seasons")
    }
    probarHuesped() {
        let h1 = new Huesped("Sofía Corona", "femenino");
        let h2 = new Huesped("Eduardo González", "masculino");
        console.log(h1.getDescripcion());
    }

    probarReservacion() {
        console.log(r1.getFechaFormatoCorto());
        console.log(r1.addHuesped());
        console.log()
    }

    probarHotel() {}
}

let app = new Main();
app.probarHuesped();