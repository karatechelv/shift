export const months = [

"فروردین",
"اردیبهشت",
"خرداد",
"تیر",
"مرداد",
"شهریور",
"مهر",
"آبان",
"آذر",
"دی",
"بهمن",
"اسفند"

];

export const weekDays = [

"شنبه",
"یکشنبه",
"دوشنبه",
"سه شنبه",
"چهارشنبه",
"پنجشنبه",
"جمعه"

];

export function pad(number){

    return number.toString().padStart(2,"0");

}

export function today(){

    const now=new Date();

    return{

        year:now.getFullYear(),

        month:now.getMonth()+1,

        day:now.getDate(),

        hour:pad(now.getHours()),

        minute:pad(now.getMinutes()),

        second:pad(now.getSeconds())

    };

}

export function now(){

    const t=today();

    return `${t.year}/${pad(t.month)}/${pad(t.day)}`;

}

export function nowTime(){

    const t=today();

    return `${t.hour}:${t.minute}:${t.second}`;

}

export function createMonth(days=31){

    return Array.from(

        {length:days},

        (_,i)=>i+1

    );

}

export function createYear(){

    return {

        month:1,

        days:createMonth()

    };

}
