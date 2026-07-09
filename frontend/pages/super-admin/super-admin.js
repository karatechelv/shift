const user=JSON.parse(localStorage.getItem("user"));

if(!user){

location.href="../auth/login.html";

}

if(user.role!=="super-admin"){

location.href="../auth/login.html";

}

const database={

hospitals:[],


hospitalAdmins:[],

users:[]

};

document.getElementById("hospitalCount").innerText=database.hospitals.length;

document.getElementById("adminCount").innerText=database.hospitalAdmins.length;

document.getElementById("userCount").innerText=database.users.length;

document

.getElementById("logout")

.addEventListener("click",()=>{

localStorage.removeItem("user");

location.href="../auth/login.html";

});
