import { initRouter } from "./router.js";
import { state } from "./state.js";

document.addEventListener("DOMContentLoaded", () => {

    initRouter();

    loadSupervisor();

    bindEvents();

});

function loadSupervisor() {

    const info = document.getElementById("supervisorInfo");

    info.innerHTML = `

        <div class="info-card">

            <div>
                <strong>نام:</strong>
                ${state.supervisor.name}
            </div>

            <div>
                <strong>بیمارستان:</strong>
                ${state.supervisor.hospital}
            </div>

            <div>
                <strong>بخش:</strong>
                ${state.supervisor.department}
            </div>

            <div>
                <strong>شماره پرسنلی:</strong>
                ${state.supervisor.code}
            </div>

        </div>

    `;

}

function bindEvents(){

    document
        .getElementById("logoutBtn")
        .addEventListener("click",()=>{

            localStorage.removeItem("user");

            location.href="../auth/login.html";

        });

}
