import { BaseService } from "./BaseService.js";

class RuleService extends BaseService{

    constructor(){

        super("rules");

    }

    getByStaff(staffId){

        return this.getAll().find(

            x=>x.staffId===staffId

        );

    }

}

export default new RuleService();
