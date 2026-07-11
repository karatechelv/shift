export function createRulePage(rule){

return `

<div class="rule-card">

<h2>

قوانین پرسنل

</h2>

<label>

حداکثر شیفت شب

</label>

<input
id="maxNight"
type="number"
value="${rule.maxNight}">

<label>

حداقل OFF

</label>

<input
id="minOff"
type="number"
value="${rule.minOff}">

<label>

شیفت ثابت

</label>

<select id="fixedShift">

<option value="">ندارد</option>

<option value="صبح">صبح</option>

<option value="عصر">عصر</option>

<option value="شب">شب</option>

</select>

<button id="saveRule">

ذخیره

</button>

</div>

`;

}
