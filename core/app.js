import { bootstrap } from "./bootstrap.js";

class Karatech {

    async start() {

        console.log("Karatech ELV Starting...");

        await bootstrap();

        console.log("Application Ready");

    }

}

export default new Karatech();
