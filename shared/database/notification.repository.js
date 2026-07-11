import { Repository } from "./repository.js";

export class NotificationRepository extends Repository{

    constructor(){

        super("notifications");

    }

    unread(userId){

        return this.all().filter(

            x=>

            x.userId===userId &&

            !x.read

        );

    }

}
