import { SHIFT } from "./schedule.rules.js";
import { canAssignShift } from "./schedule.constraints.js";
import { getScore } from "./schedule.balance.js";

const SHIFTS = [
    SHIFT.MORNING,
    SHIFT.EVENING,
    SHIFT.NIGHT,
    SHIFT.OFF
];

export function generate(staffs, days) {

    staffs.forEach(staff => {

        staff.shifts = [];

        staff.totalMorning = 0;
        staff.totalEvening = 0;
        staff.totalNight = 0;
        staff.totalOff = 0;

        for (let day = 1; day <= days; day++) {

            let best = null;
            let bestScore = -999999;

            SHIFTS.forEach(shift => {

                if (!canAssignShift(staff, day, shift))
                    return;

                const score = getScore(staff, shift);

                if (score > bestScore) {

                    bestScore = score;
                    best = shift;

                }

            });

            if (!best)
                best = SHIFT.OFF;

            staff.shifts.push(best);

            switch (best) {

                case SHIFT.MORNING:
                    staff.totalMorning++;
                    break;

                case SHIFT.EVENING:
                    staff.totalEvening++;
                    break;

                case SHIFT.NIGHT:
                    staff.totalNight++;
                    break;

                case SHIFT.OFF:
                    staff.totalOff++;
                    break;

            }

        }

    });

    return staffs;

}
