const DATABASE_KEY = "karatech_database";

const DEFAULT_DATABASE = {

    hospitals: [],

    departments: [],

    users: [],

    staffs: [],

    schedules: [],

    requests: [],

    notifications: [],

    settings: [],

    logs: []

};

export function getDatabase(){

    const db = localStorage.getItem(DATABASE_KEY);

    if(!db){

        localStorage.setItem(
            DATABASE_KEY,
            JSON.stringify(DEFAULT_DATABASE)
        );

        return structuredClone(DEFAULT_DATABASE);

    }

    return JSON.parse(db);

}

export function saveDatabase(database){

    localStorage.setItem(

        DATABASE_KEY,

        JSON.stringify(database)

    );

}
