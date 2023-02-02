const initialState  = {
    id:'',
    name:'',
    password:'',
    mobile:0,
    email:'',
    dob:'',
    gender:'',
    pincode:0,
    city:'',
    state:'',
    country:''
}
export const loginUserReducer = (state=initialState, action) => {
    const data = {
        id:action.data?.id,
        name:action.data?.name,
        password:action.data?.password,
        dob:action.data?.dob,
        gender:action.data?.gender, 
        mobile:action.data?.mobile,
        email:action.data?.email,
        pincode:action.data?.pincode,
        city:action.data?.city,
        state:action.data?.state,
        country:action.data?.country
    }
    switch(action.type) {
        case 'LOGIN_USER' :
            return {
                ...data
            }
        default:
            return state;
    }
}