export function createRequestPage(requests){

return `

<div class="toolbar">

<button id="newRequest">

درخواست جدید

</button>

</div>

<table>

<thead>

<tr>

<th>نام</th>

<th>نوع</th>

<th>از</th>

<th>تا</th>

<th>وضعیت</th>

<th>عملیات</th>

</tr>

</thead>

<tbody>

${requests.map(renderRow).join("")}

</tbody>

</table>

`;

}

function renderRow(x){

return `

<tr>

<td>${x.staffName}</td>

<td>${x.type}</td>

<td>${x.fromDate}</td>

<td>${x.toDate}</td>

<td>${x.status}</td>

<td>

<button class="accept"

data-id="${x.id}">

تایید

</button>

<button class="reject"

data-id="${x.id}">

رد

</button>

</td>

</tr>

`;

}
