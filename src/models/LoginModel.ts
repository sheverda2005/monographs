export interface ILogin {
    email: string,
    password: string,

    remember_me: boolean,
    error: string | null
}

export enum LoginTypes {
    "EMAIL_LOGIN" = "EMAIL_LOGIN",
    "PASSWORD_LOGIN" = "PASSWORD_LOGIN",

    "REMEMBER_ME" = "REMEMBER_ME",

    "CLEAR_LOGIN" = "CLEAR_LOGIN",
    "ERROR_LOGIN" = "ERROR_LOGIN",
}

interface  EmailLogin {
    type: LoginTypes.EMAIL_LOGIN,
    payload: string
}



interface PasswordLogin {
    type: LoginTypes.PASSWORD_LOGIN,
    payload: string
}


interface  ErrorLogin {
    type: LoginTypes.ERROR_LOGIN,
    payload: string
}

interface  RememberMe {
    type: LoginTypes.REMEMBER_ME,
}

interface  clearLogin {
    type: LoginTypes.CLEAR_LOGIN,
}

export type LoginActions = ErrorLogin | EmailLogin | PasswordLogin | RememberMe | clearLogin