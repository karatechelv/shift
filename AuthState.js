class AuthState{

    constructor(){

        this.user = null;

        this.token = null;

        this.role = null;

        this.loggedIn = false;

    }

}

export default new AuthState();
