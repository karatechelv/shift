import {
markAsRead,
removeNotification
}
from "./notification.service.js";

import {
renderNotifications
}
from "./notifications.js";

export function bindNotificationEvents(){

document
.querySelectorAll(".read")
.forEach(btn=>{

btn.onclick=()=>{

markAsRead(btn.dataset.id);

renderNotifications();

};

});

document
.querySelectorAll(".delete")
.forEach(btn=>{

btn.onclick=()=>{

removeNotification(btn.dataset.id);

renderNotifications();

};

});

}
