import {ShiftRow} from "./schedule.model.js";
import {SHIFT,RULES} from "./schedule.rules.js";

const TYPES=[

SHIFT.MORNING,

SHIFT.EVENING,

SHIFT.NIGHT,

SHIFT.OFF

];

export function generateSchedule(staffs,days){

    const result=[];

    staffs.forEach(staff=>{

        const row=new ShiftRow(staff);

        let last=null;

        for(let day=1;day<=days;day++){

            let shift=randomShift(last,row);

            row.shifts.push(shift);

            updateCounter(row,shift);

            last=shift;

        }

        result.push(row);

    });

    return result;

}

function randomShift(last,row){

    let available=[...TYPES];

    if(RULES.noMorningAfterNight && last===SHIFT.NIGHT){

        available=available.filter(x=>x!==SHIFT.MORNING);

    }

    if(RULES.noNightAfterNight && last===SHIFT.NIGHT){

        available=available.filter(x=>x!==SHIFT.NIGHT);

    }

    return available[Math.floor(Math.random()*available.length)];

}

function updateCounter(row,shift){

    switch(shift){

        case SHIFT.MORNING:

            row.totalMorning++;

            break;

        case SHIFT.EVENING:

            row.totalEvening++;

            break;

        case SHIFT.NIGHT:

            row.totalNight++;

            break;

        case SHIFT.OFF:

            row.totalOff++;

            break;

    }

}
