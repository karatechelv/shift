export class StaffRule {

    constructor(data = {}) {

        this.staffId = data.staffId || "";

        this.minMorning = data.minMorning ?? 0;
        this.maxMorning = data.maxMorning ?? 31;

        this.minEvening = data.minEvening ?? 0;
        this.maxEvening = data.maxEvening ?? 31;

        this.minNight = data.minNight ?? 0;
        this.maxNight = data.maxNight ?? 8;

        this.minOff = data.minOff ?? 4;

        this.fixedShift = data.fixedShift || "";

        this.allowNight = data.allowNight ?? true;

        this.allowOvertime = data.allowOvertime ?? true;

        this.noMorningAfterNight = true;

        this.noDoubleNight = true;

        this.lockedDays = [];

        this.leaveDays = [];

        this.preferredMorning = [];

        this.preferredEvening = [];

        this.preferredNight = [];

        this.preferredOff = [];

    }

}
