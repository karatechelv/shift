import { loadSchedule } from "./modules/schedule/schedule.js";

export function initRouter(){

    document

        .querySelectorAll(".tab")

        .forEach(button=>{

            button.addEventListener("click",()=>{

                document

                    .querySelectorAll(".tab")

                    .forEach(x=>x.classList.remove("active"));

                button.classList.add("active");

                const page=button.dataset.tab;

                changePage(page);

            });

        });

}

function changePage(page){

    document

        .querySelectorAll("main section")

        .forEach(x=>x.hidden=true);

    switch(page){

        case "schedule":

            document
                .getElementById("scheduleView")
                .hidden=false;

            loadSchedule();

            break;

    }

}
