import HospitalService from "./hospital.service.js";
import HospitalView from "./hospital.view.js";

export default class HospitalEvents {

    static bind(containerId) {

        const container = document.getElementById(containerId);

        container.addEventListener("click", (event) => {

            // افزودن بیمارستان
            if (event.target.id === "btnNewHospital") {

                const name = prompt("نام بیمارستان");

                if (!name) return;

                HospitalService.create(name.trim());

                HospitalView.render(containerId);

                HospitalEvents.bind(containerId);

                return;

            }

            // حذف بیمارستان
            if (event.target.classList.contains("btn-delete")) {

                const id = event.target.dataset.id;

                if (!confirm("بیمارستان حذف شود؟")) return;

                HospitalService.remove(id);

                HospitalView.render(containerId);

                HospitalEvents.bind(containerId);

                return;

            }

            // ویرایش بیمارستان
            if (event.target.classList.contains("btn-edit")) {

                const id = event.target.dataset.id;

                const hospital = HospitalService.get(id);

                if (!hospital) return;

                const name = prompt(
                    "نام جدید بیمارستان",
                    hospital.name
                );

                if (!name) return;

                HospitalService.update(id, name.trim());

                HospitalView.render(containerId);

                HospitalEvents.bind(containerId);

            }

        });

    }

}
