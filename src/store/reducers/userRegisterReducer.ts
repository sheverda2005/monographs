import {UserRegisterActions, UserRegisterData, UserRegisterDataActionTypes} from "../../models/userRegisterModel";


const initialState: UserRegisterData = {
    name: "",
    email: "",
    lastName: "",
    surName: "",
    password: "",
    repeat_password: "",
    error: null
}

export const userRegisterReducer = (state = initialState, action: UserRegisterActions): UserRegisterData => {
    switch (action.type) {
        case UserRegisterDataActionTypes.USER_REGISTER_INPUT_NAME:
            return {...state, name: action.payload}
        case UserRegisterDataActionTypes.USER_REGISTER_INPUT_EMAIL:
            return {...state, email: action.payload}
        case UserRegisterDataActionTypes.USER_REGISTER_INPUT_LAST_NAME:
            return {...state, lastName: action.payload}
        case UserRegisterDataActionTypes.USER_REGISTER_INPUT_SUR_NAME:
            return {...state, surName: action.payload}
        case UserRegisterDataActionTypes.USER_REGISTER_INPUT_PASSWORD:
            return {...state, password: action.payload}
        case UserRegisterDataActionTypes.USER_REGISTER_INPUT_REPEAT_PASSWORD:
            return {...state, repeat_password: action.payload}
        case UserRegisterDataActionTypes.USER_REGISTER_INPUT_ERROR:
            return {...state, error: action.payload}
        case UserRegisterDataActionTypes.USER_REGISTER_INPUT_ERROR_NULL:
            return {...state, error: null}
        case UserRegisterDataActionTypes.USER_REGISTER_INPUT_SUBMIT:
            return {...state, name: "", email: "", lastName: "", surName: "", password: "", repeat_password: ""}
        default:
            return state;
    }
}