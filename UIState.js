class UIState{

    constructor(){

        this.currentPage = "dashboard";

        this.loading = false;

        this.sidebar = true;

        this.modal = null;

        this.toast = [];

    }

}

export default new UIState();
