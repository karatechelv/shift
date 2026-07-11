export function createNotificationPage(list){

return `

<div class="toolbar">

<h2>

اعلانات

</h2>

</div>

<div class="notification-list">

${list.map(createCard).join("")}

</div>

`;

}

function createCard(item){

return`

<div class="notification ${item.read?"read":"unread"}">

<div>

<h3>${item.title}</h3>

<p>${item.message}</p>

<small>${item.createdAt}</small>

</div>

<div>

<button
class="read"
data-id="${item.id}">

خوانده شد

</button>

<button
class="delete"
data-id="${item.id}">

حذف

</button>

</div>

</div>

`;

}
