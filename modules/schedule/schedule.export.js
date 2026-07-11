export function exportJson(schedule){

    const blob = new Blob(

        [
            JSON.stringify(schedule,null,2)
        ],

        {
            type:"application/json"
        }

    );

    const url = URL.createObjectURL(blob);

    const a=document.createElement("a");

    a.href=url;

    a.download="schedule.json";

    a.click();

    URL.revokeObjectURL(url);

}
