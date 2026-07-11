import { Database } from "../../shared/storage/database.js";

export class AppInitializer{

    static async initialize(){

        window.DB = Database.load();

    }

}
