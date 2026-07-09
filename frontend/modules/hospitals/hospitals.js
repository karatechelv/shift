const STORAGE="karatech_shift";

const db=JSON.parse(localStorage.getItem(STORAGE))||{

    hospitals:[]

};

render();

document

.getElementById("addHospital")

.onclick=()=>{

document

.getElementById("hospitalModal")

.classList.remove("hidden");

};

document

.getElementById("saveHospital")

.onclick=()=>{

const hospital={

id:crypto.randomUUID(),

name:document.getElementById("hospitalName").value,

code:document.getElementById("hospitalCode").value,

phone:document.getElementById("hospitalPhone").value,

city:document.getElementById("hospitalCity").value,

status:true,

createdAt:new Date()

};

db.hospitals.push(hospital);

save();

render();

document

.getElementById("hospitalModal")

.classList.add("hidden");

};

function save(){

localStorage.setItem(

STORAGE,

JSON.stringify(db)

);

}

function render(){

const table=document.getElementById("hospitalTable");

table.innerHTML=`

<table>

<thead>

<tr>

<th>نام</th>

<th>کد</th>

<th>شهر</th>

<th>تلفن</th>

<th>وضعیت</th>

<th>عملیات</th>

</tr>

</thead>

<tbody>

${db.hospitals.map(h=>`

<tr>

<td>${h.name}</td>

<td>${h.code}</td>

<td>${h.city}</td>

<td>${h.phone}</td>

<td>${h.status?"فعال":"غیرفعال"}</td>

<td>

<button onclick="removeHospital('${h.id}')">

حذف

</button>

</td>

</tr>

`).join("")}

</tbody>

</table>

`;

}

window.removeHospital=id=>{

db.hospitals=db.hospitals.filter(

h=>h.id!==id

);

save();

render();

};
