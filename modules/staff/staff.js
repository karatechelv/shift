import {getStaffs} from "./staff.service.js";
import {createStaffPage} from "./staff.view.js";
import {bindEvents} from "./staff.events.js";

export function renderStaff(){

const page=document.getElementById("staffView");

page.innerHTML=createStaffPage(

getStaffs()

);

bindEvents();

}
