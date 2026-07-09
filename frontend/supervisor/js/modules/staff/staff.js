import { state } from "../../state.js";

export function renderStaff() {

    const root = document.getElementById("staffView");

    const staffs = state.staffs;

    root.innerHTML = `

        <div class="card">

            <h3>➕ ثبت پرسنل جدید</h3>

            <div class="staff-form">

                <input id="staffName" placeholder="نام کامل">

                <input id="staffCode" placeholder="کد پرسنلی">

                <input id="staffPassword" placeholder="رمز عبور">

                <select id="staffRole">

                    <option value="nurse">پرستار</option>

                    <option value="senior">پرستار ارشد</option>

                    <option value="assistant">کمکی</option>

                    <option value="service">خدمات</option>

                    <option value="behyar">بهیار</option>

                    <option value="worker">کارگر</option>

                </select>

                <button id="saveStaff">

                    ثبت پرسنل

                </button>

            </div>

        </div>

        <div class="card">

            <h3>👥 لیست پرسنل</h3>

            <table>

                <thead>

                    <tr>

                        <th>نام</th>

                        <th>کد</th>

                        <th>سمت</th>

                        <th>وضعیت</th>

                        <th>عملیات</th>

                    </tr>

                </thead>

                <tbody>

                    ${staffs.map(createRow).join("")}

                </tbody>

            </table>

        </div>

    `;

    document

        .getElementById("saveStaff")

        .onclick = addStaff;

}

function createRow(staff){

    return `

        <tr>

            <td>${staff.fullName}</td>

            <td>${staff.employeeCode}</td>

            <td>${staff.role}</td>

            <td>فعال</td>

            <td>

                <button onclick="editStaff('${staff.id}')">

                    ✏️

                </button>

                <button onclick="deleteStaff('${staff.id}')">

                    🗑️

                </button>

            </td>

        </tr>

    `;

}

function addStaff(){

    state.staffs.push({

        id:crypto.randomUUID(),

        fullName:document.getElementById("staffName").value,

        employeeCode:document.getElementById("staffCode").value,

        password:document.getElementById("staffPassword").value,

        role:document.getElementById("staffRole").value,

        vacations:[],

        requests:[],

        rules:{}

    });

    renderStaff();

}

window.editStaff=function(id){

    const s=state.staffs.find(x=>x.id===id);

    if(!s)return;

    const name=prompt("نام جدید",s.fullName);

    if(name){

        s.fullName=name;

        renderStaff();

    }

}

window.deleteStaff=function(id){

    if(!confirm("حذف شود؟")) return;

    state.staffs=state.staffs.filter(x=>x.id!==id);

    renderStaff();

}
