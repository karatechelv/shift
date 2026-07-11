export function canAssign(rule,staff,day,shift){

    if(rule.lockedDays.includes(day))

        return false;

    if(rule.leaveDays.includes(day))

        return shift==="مرخصی";

    if(

        shift==="شب" &&

        !rule.allowNight

    )

        return false;

    if(

        shift==="صبح" &&

        rule.noMorningAfterNight &&

        staff.shifts[day-2]==="شب"

    )

        return false;

    if(

        shift==="شب" &&

        rule.noDoubleNight &&

        staff.shifts[day-2]==="شب"

    )

        return false;

    return true;

}
