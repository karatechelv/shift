import { generate } from "./schedule.generator.js";
import { renderTable } from "./schedule.table.js";
import { calculateStatistics } from "./schedule.statistics.js";
import { saveSchedule } from "./schedule.service.js";
import { exportJson } from "./schedule.export.js";
import { printSchedule } from "./schedule.print.js";

let currentSchedule = null;

export function initScheduleEvents(state) {

    document
        .getElementById("generate")
        .addEventListener("click", () => {

            currentSchedule = {

                id: crypto.randomUUID(),

                year: state.year,

                month: state.month,

                staffs: generate(state.staffs, state.days)

            };

            calculateStatistics(currentSchedule);

            document
                .getElementById("tableArea")
                .innerHTML = renderTable(currentSchedule.staffs);

        });

    document
        .getElementById("saveSchedule")
        .addEventListener("click", () => {

            if (!currentSchedule) return;

            saveSchedule(currentSchedule);

            alert("برنامه ذخیره شد.");

        });

    document
        .getElementById("exportSchedule")
        .addEventListener("click", () => {

            if (!currentSchedule) return;

            exportJson(currentSchedule);

        });

    document
        .getElementById("printSchedule")
        .addEventListener("click", () => {

            printSchedule();

        });

}
