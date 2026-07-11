import { loadData } from "../../storage.js";

export function getDashboardData() {

    const db = loadData();

    return {

        staffCount: db.staffs.length,

        requestCount: db.requests.filter(r => r.status === "pending").length,

        notificationCount: db.notifications.filter(n => !n.read).length,

        scheduleCount: db.schedules.length,

        leaveCount: db.requests.filter(r => r.type === "leave").length,

        nightShiftCount: calculateNight(db)

    };

}

function calculateNight(db){

    let total = 0;

    db.schedules.forEach(schedule => {

        schedule.staffs.forEach(staff => {

            total += staff.shifts.filter(x => x === "شب").length;

        });

    });

    return total;

}
