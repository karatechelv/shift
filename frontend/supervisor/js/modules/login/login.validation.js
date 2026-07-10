export function validateLogin(username,password){

    if(username.trim()===""){

        return{

            valid:false,

            message:"نام کاربری وارد نشده است"

        };

    }

    if(password.trim()===""){

        return{

            valid:false,

            message:"رمز عبور وارد نشده است"

        };

    }

    return{

        valid:true

    };

}
