import {getRequests} from "./request.service.js";
import {createRequestPage} from "./request.view.js";
import {bindRequestEvents} from "./request.events.js";

export function renderRequests(){

const page=document.getElementById("requestsView");

page.innerHTML=createRequestPage(

getRequests()

);

bindRequestEvents();

}
