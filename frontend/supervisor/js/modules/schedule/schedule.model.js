export class Schedule {

    constructor(year, month) {

        this.id = crypto.randomUUID();

        this.year = year;

        this.month = month;

        this.createdAt = new Date().toISOString();

        this.staffs = [];

    }

}

export class ShiftRow {

    constructor(staff) {

        this.staffId = staff.id;

        this.name = staff.fullName;

        this.code = staff.employeeCode;

        this.shifts = [];

        this.totalMorning = 0;

        this.totalEvening = 0;

        this.totalNight = 0;

        this.totalOff = 0;

    }

}
