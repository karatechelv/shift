import {getStaffs,removeStaff} from "./staff.service.js";
import {renderStaff} from "./staff.js";

export function bindEvents(){

document

.querySelectorAll(".delete")

.forEach(btn=>{

btn.onclick=()=>{

if(confirm("حذف شود؟")){

removeStaff(btn.dataset.id);

renderStaff();

}

};

});

document

.querySelectorAll(".edit")

.forEach(btn=>{

btn.onclick=()=>{

console.log("edit",btn.dataset.id);

};

});

document

.querySelectorAll(".profile")

.forEach(btn=>{

btn.onclick=()=>{

console.log("profile",btn.dataset.id);

};

});

}
