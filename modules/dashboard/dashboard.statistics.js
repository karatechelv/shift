export function buildStatistics(data){

    return [

        {

            title:"پرسنل",

            value:data.staffCount,

            icon:"👥"

        },

        {

            title:"درخواست های در انتظار",

            value:data.requestCount,

            icon:"📩"

        },

        {

            title:"اعلان های جدید",

            value:data.notificationCount,

            icon:"🔔"

        },

        {

            title:"برنامه های ثبت شده",

            value:data.scheduleCount,

            icon:"📅"

        },

        {

            title:"مرخصی ها",

            value:data.leaveCount,

            icon:"🏖"

        },

        {

            title:"شیفت شب",

            value:data.nightShiftCount,

            icon:"🌙"

        }

    ];

}
