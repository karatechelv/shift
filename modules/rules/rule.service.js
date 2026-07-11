import {loadData,saveData} from "../../storage.js";

export function getRules(){

    return loadData().rules;

}

export function getRule(staffId){

    return getRules().find(

        x=>x.staffId===staffId

    );

}

export function saveRule(rule){

    const db=loadData();

    const index=db.rules.findIndex(

        x=>x.staffId===rule.staffId

    );

    if(index===-1)

        db.rules.push(rule);

    else

        db.rules[index]=rule;

    saveData(db);

}
