export function validate(staff){

    if(staff.fullName.trim()==="")

        return "نام وارد نشده است";

    if(staff.employeeCode.trim()==="")

        return "کد پرسنلی وارد نشده است";

    if(staff.password.length<4)

        return "رمز عبور کوتاه است";

    return null;

}
