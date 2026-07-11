export class Staff {

    constructor(data = {}) {

        this.id = data.id || crypto.randomUUID();

        this.employeeCode = data.employeeCode || "";

        this.fullName = data.fullName || "";

        this.nationalCode = data.nationalCode || "";

        this.mobile = data.mobile || "";

        this.password = data.password || "1234";

        this.role = data.role || "پرستار";

        this.gender = data.gender || "زن";

        this.employmentType = data.employmentType || "رسمی";

        this.active = true;

        this.leave = [];

        this.requests = [];

        this.fixedShift = "";

        this.skills = [];

        this.notes = "";

        this.createdAt = new Date().toISOString();

    }

}
