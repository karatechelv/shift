export function applyLeave(schedule,requests){

    requests

    .filter(x=>x.type==="leave")

    .forEach(request=>{

        const staff = schedule.staffs.find(

            x=>x.id===request.staffId

        );

        if(!staff) return;

        request.days.forEach(day=>{

            staff.shifts[day-1]="مرخصی";

        });

    });

}
