import {

    getDatabase,

    saveDatabase

} from "./database.js";

export class Repository{

    constructor(table){

        this.table = table;

    }

    all(){

        return getDatabase()[this.table];

    }

    find(id){

        return this.all().find(

            x => x.id === id

        );

    }

    insert(item){

        const db = getDatabase();

        db[this.table].push(item);

        saveDatabase(db);

        return item;

    }

    update(item){

        const db = getDatabase();

        const index = db[this.table].findIndex(

            x => x.id === item.id

        );

        if(index !== -1){

            db[this.table][index] = item;

            saveDatabase(db);

        }

    }

    delete(id){

        const db = getDatabase();

        db[this.table] = db[this.table].filter(

            x => x.id !== id

        );

        saveDatabase(db);

    }

}
