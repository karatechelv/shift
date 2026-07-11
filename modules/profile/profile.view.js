export function renderProfile(profile,stats){

return`

<div class="profile">

<div class="header">

<h2>${profile.fullName}</h2>

<span>

${profile.position}

</span>

</div>

<div class="grid">

<div>

<label>کد پرسنلی</label>

<p>${profile.employeeCode}</p>

</div>

<div>

<label>شماره موبایل</label>

<p>${profile.mobile}</p>

</div>

<div>

<label>نوع استخدام</label>

<p>${profile.employmentType}</p>

</div>

<div>

<label>بخش</label>

<p>${profile.department}</p>

</div>

</div>

<div class="statistics">

<div>

صبح

<h3>${stats.totalMorning}</h3>

</div>

<div>

عصر

<h3>${stats.totalEvening}</h3>

</div>

<div>

شب

<h3>${stats.totalNight}</h3>

</div>

<div>

OFF

<h3>${stats.totalOff}</h3>

</div>

<div>

مرخصی

<h3>${stats.totalLeave}</h3>

</div>

</div>

`;

}
