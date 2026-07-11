export class Notification {

    constructor(data={}){

        this.id=data.id||crypto.randomUUID();

        this.staffId=data.staffId||"";

        this.title=data.title||"";

        this.message=data.message||"";

        this.type=data.type||"info";

        this.read=false;

        this.createdAt=new Date().toISOString();

    }

}
