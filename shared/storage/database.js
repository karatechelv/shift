import { defaultData } from "./defaultData.js";

const STORAGE_KEY = "karatech_database";

export class Database {

    static load() {

        const json = localStorage.getItem(STORAGE_KEY);

        if (!json) {

            this.save(defaultData);

            return structuredClone(defaultData);

        }

        return JSON.parse(json);

    }

    static save(data) {

        localStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(data)

        );

    }

    static reset() {

        this.save(defaultData);

    }

}
