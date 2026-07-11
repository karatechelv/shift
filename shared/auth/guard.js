import { isLoggedIn } from "./session.js";

export function guard(){

    if(!isLoggedIn()){

        location.href="/login.html";

    }

}
