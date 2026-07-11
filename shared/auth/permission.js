import { getSession } from "./session.js";

export function can(permission){

    const user = getSession();

    if(!user) return false;

    return user.permissions.includes(permission);

}
