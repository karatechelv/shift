const KEY = "karatech_session";

export function saveSession(user){

    sessionStorage.setItem(
        KEY,
        JSON.stringify(user)
    );

}

export function getSession(){

    const data = sessionStorage.getItem(KEY);

    return data ? JSON.parse(data) : null;

}

export function clearSession(){

    sessionStorage.removeItem(KEY);

}

export function isLoggedIn(){

    return getSession() !== null;

}
