export function createDays(monthLength){

    return Array.from(

        {

            length:monthLength

        },

        (_,i)=>({

            day:i+1,

            holiday:false

        })

    );

}
