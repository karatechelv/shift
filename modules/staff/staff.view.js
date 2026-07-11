export function createStaffPage(staffs){

return`

<div class="toolbar">

<button id="newStaff">

ثبت پرسنل

</button>

<input
id="searchStaff"
placeholder="جستجو">

</div>

<table>

<thead>

<tr>

<th>کد</th>

<th>نام</th>

<th>سمت</th>

<th>موبایل</th>

<th>وضعیت</th>

<th>عملیات</th>

</tr>

</thead>

<tbody>

${staffs.map(renderRow).join("")}

</tbody>

</table>

`;

}

function renderRow(x){

return`

<tr>

<td>${x.employeeCode}</td>

<td>${x.fullName}</td>

<td>${x.role}</td>

<td>${x.mobile}</td>

<td>${x.active?"فعال":"غیرفعال"}</td>

<td>

<button class="edit"

data-id="${x.id}">

ویرایش

</button>

<button class="delete"

data-id="${x.id}">

حذف

</button>

<button class="profile"

data-id="${x.id}">

پروفایل

</button>

</td>

</tr>

`;

}
