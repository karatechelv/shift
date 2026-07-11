import { loadData, saveData } from "../../storage.js";

export function getSchedule(month, year) {

    const db = loadData();

    return db.schedules.find(x =>
        x.month == month &&
        x.year == year
    );

}

export function saveSchedule(schedule) {

    const db = loadData();

    const index = db.schedules.findIndex(x =>
        x.id == schedule.id
    );

    if (index == -1)
        db.schedules.push(schedule);
    else
        db.schedules[index] = schedule;

    saveData(db);

}

export function deleteSchedule(id) {

    const db = loadData();

    db.schedules = db.schedules.filter(x => x.id != id);

    saveData(db);

}
