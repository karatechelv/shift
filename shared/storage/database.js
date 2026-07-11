const STORAGE_KEY = "nurse_system_data";

function getDefaultData() {
    return {
        hospitals: [],
        supervisors: [],
        staff: [],
        requests: [],
        requestHistory: [],
        schedules: {},
        settings: {}
    };
}

export function loadDatabase() {
    try {
        const json = localStorage.getItem(STORAGE_KEY);

        if (!json) {
            const data = getDefaultData();
            saveDatabase(data);
            return data;
        }

        return JSON.parse(json);

    } catch {

        const data = getDefaultData();
        saveDatabase(data);
        return data;

    }
}

export function saveDatabase(data) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

}
