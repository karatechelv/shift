import { Repository } from "./repository.js";

export class ScheduleRepository extends Repository{

    constructor(){

        super("schedules");

    }

    month(year,month,departmentId){

        return this.all().find(

            x =>

            x.year===year &&

            x.month===month &&

            x.departmentId===departmentId

        );

    }

}
