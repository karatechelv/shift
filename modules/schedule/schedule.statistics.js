export function calculateStatistics(schedule) {

    schedule.staffs.forEach(staff => {

        staff.statistics = {

            morning: 0,
            evening: 0,
            night: 0,
            off: 0,
            leave: 0,
            work: 0

        };

        staff.shifts.forEach(day => {

            switch(day){

                case "صبح":
                    staff.statistics.morning++;
                    staff.statistics.work++;
                    break;

                case "عصر":
                    staff.statistics.evening++;
                    staff.statistics.work++;
                    break;

                case "شب":
                    staff.statistics.night++;
                    staff.statistics.work++;
                    break;

                case "OFF":
                    staff.statistics.off++;
                    break;

                case "مرخصی":
                    staff.statistics.leave++;
                    break;

            }

        });

    });

}
