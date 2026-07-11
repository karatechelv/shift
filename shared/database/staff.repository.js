import { Repository } from "./repository.js";

export class StaffRepository extends Repository{

    constructor(){

        super("staffs");

    }

    byDepartment(departmentId){

        return this.all().filter(

            x => x.departmentId === departmentId

        );

    }

    byHospital(hospitalId){

        return this.all().filter(

            x => x.hospitalId === hospitalId

        );

    }

}
