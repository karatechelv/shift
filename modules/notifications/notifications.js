import {
getNotifications
}
from "./notification.service.js";

import {
createNotificationPage
}
from "./notification.view.js";

import {
bindNotificationEvents
}
from "./notification.events.js";

export function renderNotifications(){

const page=document.getElementById("notificationsView");

page.innerHTML=createNotificationPage(

getNotifications()

);

bindNotificationEvents();

}
