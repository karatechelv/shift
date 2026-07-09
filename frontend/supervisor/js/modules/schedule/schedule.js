export function loadSchedule(){

    const page=document.getElementById("scheduleView");

    page.innerHTML=`

    <div class="toolbar">

        <button id="newSchedule">

            تولید شیفت

        </button>

        <button id="saveSchedule">

            ذخیره

        </button>

        <button id="exportExcel">

            خروجی Excel

        </button>

    </div>

    <table class="schedule-table">

        <thead>

            <tr>

                <th>نام</th>

                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>

            </tr>

        </thead>

        <tbody id="scheduleBody">

        </tbody>

    </table>

    `;

}
