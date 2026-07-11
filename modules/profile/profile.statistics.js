export function createStatistics(staff){

    return{

        totalMorning:

        staff.shifts.filter(x=>x=="صبح").length,

        totalEvening:

        staff.shifts.filter(x=>x=="عصر").length,

        totalNight:

        staff.shifts.filter(x=>x=="شب").length,

        totalOff:

        staff.shifts.filter(x=>x=="OFF").length,

        totalLeave:

        staff.shifts.filter(x=>x=="مرخصی").length,

        totalRequest:

        staff.requests.length

    };

}
