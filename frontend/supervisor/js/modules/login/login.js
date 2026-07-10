import { authenticate } from "./login.service.js";
import { validateLogin } from "./login.validation.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", login);

function login(e){

    e.preventDefault();

    const username=document.getElementById("username").value;

    const password=document.getElementById("password").value;

    const check=validateLogin(username,password);

    if(!check.valid){

        alert(check.message);

        return;

    }

    const user=authenticate(username,password);

    if(!user){

        alert("نام کاربری یا رمز عبور اشتباه است");

        return;

    }

    sessionStorage.setItem(

        "currentUser",

        JSON.stringify(user)

    );

    location.href="../index.html";

}
