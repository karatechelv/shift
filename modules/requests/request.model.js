export class Request {

    constructor(data = {}) {

        this.id = data.id || crypto.randomUUID();

        this.staffId = data.staffId || "";

        this.type = data.type || "";

        this.fromDate = data.fromDate || "";

        this.toDate = data.toDate || "";

        this.shift = data.shift || "";

        this.description = data.description || "";

        this.status = "pending";

        this.createdAt = new Date().toISOString();

        this.reviewedBy = "";

        this.reviewedAt = "";

    }

}
