const users = [

    {

        username:"super",

        password:"1234",

        role:"super-admin"

    },

    {

        username:"hospital",

        password:"1234",

        role:"hospital-admin"

    },

    {

        username:"supervisor",

        password:"1234",

        role:"supervisor"

    },

    {

        username:"staff",

        password:"1234",

        role:"staff"

    }

];

document

.getElementById("loginForm")

.addEventListener("submit",login);

function login(e){

    e.preventDefault();

    const username=document.getElementById("username").value;

    const password=document.getElementById("password").value;

    const user=users.find(

        x=>x.username===username && x.password===password

    );

    if(!user){

        alert("نام کاربری یا رمز اشتباه است");

        return;

    }

    localStorage.setItem(

        "user",

        JSON.stringify(user)

    );

    switch(user.role){

        case "super-admin":

            location.href="../super-admin/index.html";

            break;

        case "hospital-admin":

            location.href="../hospital-admin/index.html";

            break;

        case "supervisor":

            location.href="../supervisor/index.html";

            break;

        case "staff":

            location.href="../staff/index.html";

            break;

    }

}
