import HospitalView from "./hospital.view.js";
import HospitalEvents from "./hospital.events.js";

export default class HospitalController {

    static init(containerId) {

        this.containerId = containerId;

        this.render();

        this.bind();

    }

    static render() {

        HospitalView.render(this.containerId);

    }

    static refresh() {

        this.render();

    }

    static bind() {

        HospitalEvents.bind(this.containerId);

    }

}
