export function createPlan(context){

    return {

        hospitalId: context.hospital.id,

        departmentId: context.department.id,

        year: context.year,

        month: context.month,

        staffs: []

    };

}
