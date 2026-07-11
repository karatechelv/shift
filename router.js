const routes={};

export function register(path,callback){

    routes[path]=callback;

}

export function initRouter(){

    console.log("Router Ready");

}
