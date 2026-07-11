import {loadData,saveData} from "../../storage.js";

export function getProfile(id){

    return loadData().profiles.find(

        x=>x.staffId===id

    );

}

export function saveProfile(profile){

    const db=loadData();

    const index=db.profiles.findIndex(

        x=>x.staffId===profile.staffId

    );

    if(index==-1)

        db.profiles.push(profile);

    else

        db.profiles[index]=profile;

    saveData(db);

}
