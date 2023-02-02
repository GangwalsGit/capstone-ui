const LOGIN_COACH = 'LOGIN_COACH';
const LOGIN_USER = 'LOGIN_USER';

export const loginCoach = (data)=>{
    console.log("action"+JSON.stringify(data))
    return {
    type:LOGIN_COACH,
    data,
}}

export const loginUser = (data)=>{
    console.log("action"+JSON.stringify(data))
    return {
    type:LOGIN_USER,
    data,
}}