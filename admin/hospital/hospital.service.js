import { loadDatabase, saveDatabase } from "../../shared/storage/database.js";
import { uid } from "../../shared/utils/common.js";

export default class HospitalService {

    static getAll() {

        const db = loadDatabase();

        return db.hospitals;

    }

    static get(id) {

        const db = loadDatabase();

        return db.hospitals.find(x => x.id === id);

    }

    static create(name) {

        const db = loadDatabase();

        const hospital = {

            id: uid(),

            name,

            departments: []

        };

        db.hospitals.push(hospital);

        saveDatabase(db);

        return hospital;

    }

    static update(id, name) {

        const db = loadDatabase();

        const hospital = db.hospitals.find(x => x.id === id);

        if (!hospital) return;

        hospital.name = name;

        saveDatabase(db);

    }

    static remove(id) {

        const db = loadDatabase();

        db.hospitals = db.hospitals.filter(x => x.id !== id);

        saveDatabase(db);

    }

    static addDepartment(hospitalId, departmentName) {

        const db = loadDatabase();

        const hospital = db.hospitals.find(x => x.id === hospitalId);

        if (!hospital) return;

        hospital.departments.push({

            id: uid(),

            name: departmentName

        });

        saveDatabase(db);

    }

    static removeDepartment(hospitalId, departmentId) {

        const db = loadDatabase();

        const hospital = db.hospitals.find(x => x.id === hospitalId);

        if (!hospital) return;

        hospital.departments = hospital.departments.filter(

            d => d.id !== departmentId

        );

        saveDatabase(db);

    }

}
