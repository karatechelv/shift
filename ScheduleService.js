import { BaseService } from "./BaseService.js";

class ScheduleService extends BaseService{

    constructor(){

        super("schedules");

    }

    getMonth(year,month,departmentId){

        return this.getAll().find(

            x=>

            x.year===year &&

            x.month===month &&

            x.departmentId===departmentId

        );

    }

}

export default new ScheduleService();
