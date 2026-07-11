import { saveSession } from "./session.js";

export function login(user){

    saveSession(user);

    switch(user.role){

        case "admin":
            location.href="/admin/";
            break;

        case "supervisor":
            location.href="/supervisor/";
            break;

        case "staff":
            location.href="/staff/";
            break;

    }

}
