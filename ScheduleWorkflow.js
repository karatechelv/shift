import StaffService from "../services/StaffService.js";
import RuleService from "../services/RuleService.js";
import ScheduleService from "../services/ScheduleService.js";

import { run as ShiftEngine } from "../shift-engine/engine.js";

export async function execute(context){

    context.staffs = StaffService.getByDepartment(
        context.department.id
    );

    context.rules = RuleService.getAll();

    context.schedule = await ShiftEngine(context);

    ScheduleService.create(context.schedule);

    return context.schedule;

}
