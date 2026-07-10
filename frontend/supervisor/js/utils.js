export function uuid(){

    return crypto.randomUUID();

}

export function clone(data){

    return structuredClone(data);

}

export function message(text){

    alert(text);

}

export function confirmBox(text){

    return confirm(text);

}

export function $(selector){

    return document.querySelector(selector);

}

export function $all(selector){

    return document.querySelectorAll(selector);

}

export function create(tag){

    return document.createElement(tag);

}

export function clear(element){

    element.innerHTML="";

}

export function saveFile(name,data){

    const blob=new Blob(

        [data],

        {type:"application/json"}

    );

    const url=URL.createObjectURL(blob);

    const a=document.createElement("a");

    a.href=url;

    a.download=name;

    a.click();

    URL.revokeObjectURL(url);

}
