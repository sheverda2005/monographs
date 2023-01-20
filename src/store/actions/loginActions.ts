import {Dispatch} from "redux";
import {LoginActions, LoginTypes} from "../../models/LoginModel";
import React, {ChangeEvent} from "react";
import $api from "../../http";
import {IUserDataActions, IUserDataTypes} from "../../models/userDataModel";

export function emailLogin(event: ChangeEvent<HTMLInputElement>) {
    return (dispatch: Dispatch<LoginActions>) => {
        dispatch({type: LoginTypes.EMAIL_LOGIN, payload: event.target.value})
    }
}

export function passwordLogin(event: ChangeEvent<HTMLInputElement>) {
    return (dispatch: Dispatch<LoginActions>) => {
        dispatch({type: LoginTypes.PASSWORD_LOGIN, payload: event.target.value})
    }
}

export function rememberMe() {
    return (dispatch: Dispatch<LoginActions>) => {
        dispatch({type: LoginTypes.REMEMBER_ME})
    }
}

export function login_Submit(event: React.MouseEvent<HTMLButtonElement> , email: string, password: string, remember_me: boolean, redirect: any) {
    return async (dispatch: Dispatch<LoginActions | IUserDataActions>) => {
        try {
            event.preventDefault()
            dispatch({type: IUserDataTypes.USER_DATA_TYPES_LOADING})
            const res = await $api.post('/login', {email, password})
            if (remember_me) {
                localStorage.setItem("accessToken", res.data.accessToken)
            }
            dispatch({type: IUserDataTypes.USER_DATA_TYPES_SUCCESS, payload: res.data.userData})
            dispatch({type: LoginTypes.CLEAR_LOGIN})
            redirect()
        } catch (e) {
            dispatch({type: LoginTypes.ERROR_LOGIN, payload: "Сталась помилка"})
        }
    }
}