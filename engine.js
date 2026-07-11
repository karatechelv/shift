import { loadContext } from "./loader.js";
import { createPlan } from "./planner.js";
import { allocateShifts } from "./allocator.js";
import { validateSchedule } from "./validator.js";
import { optimizeSchedule } from "./optimizer.js";
import { calculateStatistics } from "./statistics.js";
import { saveSchedule } from "./saver.js";

export async function run(options){

    const context = await loadContext(options);

    let schedule = createPlan(context);

    schedule = allocateShifts(schedule, context);

    schedule = optimizeSchedule(schedule, context);

    validateSchedule(schedule, context);

    calculateStatistics(schedule);

    await saveSchedule(schedule);

    return schedule;

}
