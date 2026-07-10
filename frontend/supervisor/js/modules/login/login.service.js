import { loadData } from "../../storage.js";

export function authenticate(username, password) {

    const db = loadData();

    if (!db.supervisor) {
        return null;
    }

    if (
        db.supervisor.username === username &&
        db.supervisor.password === password
    ) {
        return db.supervisor;
    }

    const staff = db.staffs.find(user =>
        user.username === username &&
        user.password === password
    );

    return staff || null;

}
