import { Repository } from "./repository.js";

export class RequestRepository extends Repository{

    constructor(){

        super("requests");

    }

    pending(){

        return this.all().filter(

            x=>x.status==="pending"

        );

    }

}
