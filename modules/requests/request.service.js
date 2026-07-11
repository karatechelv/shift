import {loadData,saveData} from "../../storage.js";

export function getRequests(){

    return loadData().requests;

}

export function addRequest(request){

    const db=loadData();

    db.requests.push(request);

    saveData(db);

}

export function updateRequest(request){

    const db=loadData();

    const index=db.requests.findIndex(x=>x.id===request.id);

    db.requests[index]=request;

    saveData(db);

}

export function deleteRequest(id){

    const db=loadData();

    db.requests=db.requests.filter(x=>x.id!==id);

    saveData(db);

}
