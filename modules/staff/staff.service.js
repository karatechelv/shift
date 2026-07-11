import {loadData,saveData} from "../../storage.js";

export function getStaffs(){

    return loadData().staffs;

}

export function addStaff(staff){

    const db=loadData();

    db.staffs.push(staff);

    saveData(db);

}

export function updateStaff(staff){

    const db=loadData();

    const index=db.staffs.findIndex(x=>x.id===staff.id);

    db.staffs[index]=staff;

    saveData(db);

}

export function removeStaff(id){

    const db=loadData();

    db.staffs=db.staffs.filter(x=>x.id!==id);

    saveData(db);

}
