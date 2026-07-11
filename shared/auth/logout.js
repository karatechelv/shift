import { clearSession } from "./session.js";

export function logout(){

    clearSession();

    location.href="/login.html";

}
