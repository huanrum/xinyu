import http from './http';

export default function(...args){
    return http(...args);
}

export function login(username, password){
    return http('login', {username, password});
}

export function changepassword(password, password1){
    return http('changepassword', {password1, password});
}

export function list(type){
    return http('list', {type});
}

export function count(type){
    return http('count', {type});
}