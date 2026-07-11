import HospitalService from "./hospital.service.js";

export default class HospitalView {

    static render(containerId) {

        const container = document.getElementById(containerId);

        const hospitals = HospitalService.getAll();

        container.innerHTML = `

            <div class="page-title">

                <h2>مدیریت بیمارستان‌ها</h2>

            </div>

            <div class="toolbar">

                <button id="btnNewHospital" class="btn btn-primary">
                    بیمارستان جدید
                </button>

            </div>

            <table class="table">

                <thead>

                    <tr>

                        <th>نام بیمارستان</th>

                        <th>تعداد بخش</th>

                        <th>عملیات</th>

                    </tr>

                </thead>

                <tbody>

                    ${hospitals.map(h=>`

                        <tr>

                            <td>${h.name}</td>

                            <td>${h.departments.length}</td>

                            <td>

                                <button
                                    class="btn-edit"
                                    data-id="${h.id}"
                                >
                                    ویرایش
                                </button>

                                <button
                                    class="btn-delete"
                                    data-id="${h.id}"
                                >
                                    حذف
                                </button>

                            </td>

                        </tr>

                    `).join("")}

                </tbody>

            </table>

        `;

    }

}
