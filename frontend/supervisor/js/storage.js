const STORAGE_KEY = "nurse_system_data";

const DEFAULT_DATA = {

    supervisor: {},

    staffs: [],

    schedules: [],

    requests: [],

    notifications: [],

    rules: [],

    profile: {},

    settings: {}

};

export function loadData() {

    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(DEFAULT_DATA)
        );

        return structuredClone(DEFAULT_DATA);

    }

    try {

        return JSON.parse(raw);

    } catch (e) {

        localStorage.removeItem(STORAGE_KEY);

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(DEFAULT_DATA)
        );

        return structuredClone(DEFAULT_DATA);

    }

}

export function saveData(data) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

}

export function clearData() {

    localStorage.removeItem(STORAGE_KEY);

}

export function updateSection(section, value) {

    const data = loadData();

    data[section] = value;

    saveData(data);

}

export function getSection(section) {

    const data = loadData();

    return data[section];

}
