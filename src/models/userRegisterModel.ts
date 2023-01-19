
export interface UserRegisterData {
    name: string,
    lastName: string,
    surName: string,
    email: string,
    password: string,
    repeat_password: string,
    error: string | null
}

export enum UserRegisterDataActionTypes {
    USER_REGISTER_INPUT_NAME="USER_REGISTER_INPUT_NAME",
    USER_REGISTER_INPUT_LAST_NAME="USER_REGISTER_INPUT_LAST_NAME",
    USER_REGISTER_INPUT_SUR_NAME="USER_REGISTER_INPUT_SUR_NAME",
    USER_REGISTER_INPUT_EMAIL="USER_REGISTER_INPUT_EMAIL",
    USER_REGISTER_INPUT_PASSWORD="USER_REGISTER_INPUT_PASSWORD",
    USER_REGISTER_INPUT_REPEAT_PASSWORD="USER_REGISTER_INPUT_REPEAT_PASSWORD",
    USER_REGISTER_INPUT_ERROR="USER_REGISTER_INPUT_ERROR",
    USER_REGISTER_INPUT_ERROR_NULL="USER_REGISTER_INPUT_ERROR_NULL",
    USER_REGISTER_INPUT_SUBMIT="USER_REGISTER_INPUT_SUBMIT",

}

interface userRegisterInputName {
    type: UserRegisterDataActionTypes.USER_REGISTER_INPUT_NAME,
    payload: string
}

interface userRegisterInputLastName {
    type: UserRegisterDataActionTypes.USER_REGISTER_INPUT_LAST_NAME,
    payload: string
}

interface userRegisterInputSurName {
    type: UserRegisterDataActionTypes.USER_REGISTER_INPUT_SUR_NAME,
    payload: string
}

interface userRegisterInputEmail {
    type: UserRegisterDataActionTypes.USER_REGISTER_INPUT_EMAIL,
    payload: string
}

interface userRegisterInputPassword {
    type: UserRegisterDataActionTypes.USER_REGISTER_INPUT_PASSWORD,
    payload: string
}

interface userRegisterInputRepeatPassword {
    type: UserRegisterDataActionTypes.USER_REGISTER_INPUT_REPEAT_PASSWORD,
    payload: string
}

interface userRegisterInputError {
    type: UserRegisterDataActionTypes.USER_REGISTER_INPUT_ERROR,
    payload: string
}

interface userRegisterInputErrorNull {
    type: UserRegisterDataActionTypes.USER_REGISTER_INPUT_ERROR_NULL
}

interface userRegisterInputSubmit {
    type: UserRegisterDataActionTypes.USER_REGISTER_INPUT_SUBMIT
}

export type UserRegisterActions =
    userRegisterInputName |
    userRegisterInputLastName |
    userRegisterInputSurName |
    userRegisterInputEmail |
    userRegisterInputPassword |
    userRegisterInputRepeatPassword |
    userRegisterInputError |
    userRegisterInputErrorNull |
    userRegisterInputSubmit