import { AppInitializer } from "./AppInitializer.js";
import { AppController } from "./AppController.js";

class App{

    async start(){

        await AppInitializer.initialize();

        AppController.render();

    }

}

export default new App();
