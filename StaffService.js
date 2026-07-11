import { BaseService } from "./BaseService.js";

class StaffService extends BaseService{

    constructor(){

        super("staffs");

    }

    getByDepartment(departmentId){

        return this.getAll().filter(

            x=>x.departmentId===departmentId

        );

    }

    getActive(){

        return this.getAll().filter(

            x=>x.active

        );

    }

}

export default new StaffService();
