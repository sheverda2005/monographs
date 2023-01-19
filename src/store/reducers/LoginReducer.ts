import {ILogin, LoginActions, LoginTypes} from "../../models/LoginModel";


export const initialState: ILogin = {
    email: '',
    password: "",
    remember_me: false,
    error: null
}

export const LoginReducer = (state = initialState, action: LoginActions): ILogin => {
    switch (action.type) {
        case LoginTypes.EMAIL_LOGIN:
            return {...state, email: action.payload}
        case LoginTypes.PASSWORD_LOGIN:
            return {...state, password: action.payload}
        case LoginTypes.ERROR_LOGIN:
            return {...state, error: action.payload}
        case LoginTypes.REMEMBER_ME:
            return {...state, remember_me:  !state.remember_me}
        case LoginTypes.CLEAR_LOGIN:
            return  {...state, email: '', password: '', remember_me: false, error: null}
        default:
            return state;
    }
}