import { createToolbar } from "./schedule.view.js";
import { initScheduleEvents } from "./schedule.events.js";

export function loadSchedule(state) {

    const page = document.getElementById("scheduleView");

    page.innerHTML = createToolbar();

    initScheduleEvents(state);

}
