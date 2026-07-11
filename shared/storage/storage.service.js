import { Database } from "./database.js";

export class StorageService {

    static get(table){

        return Database.load()[table];

    }

    static save(table,data){

        const db=Database.load();

        db[table]=data;

        Database.save(db);

    }

}
