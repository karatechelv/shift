import { Repository } from "../database/repository.js";

export class BaseService {

    constructor(table){

        this.repository = new Repository(table);

    }

    getAll(){

        return this.repository.all();

    }

    get(id){

        return this.repository.find(id);

    }

    create(item){

        return this.repository.insert(item);

    }

    update(item){

        return this.repository.update(item);

    }

    delete(id){

        return this.repository.delete(id);

    }

}
