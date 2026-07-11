const events={};

export function on(name,callback){

    if(!events[name])

        events[name]=[];

    events[name].push(callback);

}

export function emit(name,data){

    if(!events[name])

        return;

    events[name].forEach(fn=>fn(data));

}

export function initEvents(){

    console.log("EventBus Ready");

}
