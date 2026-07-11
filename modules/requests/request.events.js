import {getRequests,updateRequest} from "./request.service.js";
import {renderRequests} from "./requests.js";

export function bindRequestEvents(){

document

.querySelectorAll(".accept")

.forEach(btn=>{

btn.onclick=()=>{

const request=getRequests().find(

x=>x.id===btn.dataset.id

);

request.status="approved";

updateRequest(request);

renderRequests();

};

});

document

.querySelectorAll(".reject")

.forEach(btn=>{

btn.onclick=()=>{

const request=getRequests().find(

x=>x.id===btn.dataset.id

);

request.status="rejected";

updateRequest(request);

renderRequests();

};

});

}
