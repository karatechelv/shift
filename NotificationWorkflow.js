import NotificationService from "../services/NotificationService.js";

export function notify(users,title,message){

    users.forEach(user=>{

        NotificationService.create({

            id:crypto.randomUUID(),

            userId:user.id,

            title,

            message,

            read:false,

            createdAt:new Date().toISOString()

        });

    });

}
