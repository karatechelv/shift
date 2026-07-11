import {loadData,saveData} from "../../storage.js";

export function getNotifications(){

    return loadData().notifications;

}

export function addNotification(notification){

    const db=loadData();

    db.notifications.push(notification);

    saveData(db);

}

export function markAsRead(id){

    const db=loadData();

    const item=db.notifications.find(x=>x.id===id);

    if(item){

        item.read=true;

        saveData(db);

    }

}

export function removeNotification(id){

    const db=loadData();

    db.notifications=db.notifications.filter(x=>x.id!==id);

    saveData(db);

}
