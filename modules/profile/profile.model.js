export class StaffProfile {

    constructor(data = {}) {

        this.staffId = data.staffId || "";

        this.fullName = data.fullName || "";

        this.employeeCode = data.employeeCode || "";

        this.nationalCode = data.nationalCode || "";

        this.mobile = data.mobile || "";

        this.birthDate = data.birthDate || "";

        this.gender = data.gender || "";

        this.education = data.education || "";

        this.position = data.position || "";

        this.department = data.department || "";

        this.employmentType = data.employmentType || "";

        this.startDate = data.startDate || "";

        this.address = data.address || "";

        this.email = data.email || "";

        this.skills = [];

        this.certificates = [];

        this.notes = "";

        this.avatar = "";

    }

}
