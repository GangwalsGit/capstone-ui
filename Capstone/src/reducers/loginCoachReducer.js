const initialState = { name:"", password:"", dob:"", gender:"", mobile:0, speciality:"" }; 

export const loginCoachReducer = (state=initialState, action) => {
    const data = {
        id:action.data?.id,
        name:action.data?.name,
        password:action.data?.password,
        dob:action.data?.dob,
        gender:action.data?.gender, 
        mobile:action.data?.mobile,
        speciality:action.data?.speciality
    }
    switch(action.type) {
        case 'LOGIN_COACH' :
            return {
                ...data
            }
        default:
            return state;
    }
}