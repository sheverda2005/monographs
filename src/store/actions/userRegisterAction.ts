import {Dispatch} from "redux";
import {UserRegisterActions, UserRegisterData, UserRegisterDataActionTypes} from "../../models/userRegisterModel";
import React from "react";
import $api from "../../http";
import {AuthResponse} from "../../models/AuthResponse";
import {IUserDataActions, IUserDataTypes} from "../../models/userDataModel";

export function userRegisterName(event: React.ChangeEvent<HTMLInputElement>) {
    return (dispatch: Dispatch<UserRegisterActions>) => {
        dispatch({type: UserRegisterDataActionTypes.USER_REGISTER_INPUT_NAME, payload: event.target.value})
    }
}

export function userRegisterLastName(event: React.ChangeEvent<HTMLInputElement>) {
    return (dispatch: Dispatch<UserRegisterActions>) => {
        dispatch({type: UserRegisterDataActionTypes.USER_REGISTER_INPUT_LAST_NAME, payload: event.target.value})
    }
}

export function userRegisterSurName(event: React.ChangeEvent<HTMLInputElement>) {
    return (dispatch: Dispatch<UserRegisterActions>) => {
        dispatch({type: UserRegisterDataActionTypes.USER_REGISTER_INPUT_SUR_NAME, payload: event.target.value})
    }
}

export function userRegisterEmail(event: React.ChangeEvent<HTMLInputElement>) {
    return (dispatch: Dispatch<UserRegisterActions>) => {
        dispatch({type: UserRegisterDataActionTypes.USER_REGISTER_INPUT_EMAIL, payload: event.target.value})
    }
}

export function userRegisterPassword(event: React.ChangeEvent<HTMLInputElement>) {
    return (dispatch: Dispatch<UserRegisterActions>) => {
        dispatch({type: UserRegisterDataActionTypes.USER_REGISTER_INPUT_PASSWORD, payload: event.target.value})
    }
}

export function userRegisterRepeatPassword(event: React.ChangeEvent<HTMLInputElement>) {
    return (dispatch: Dispatch<UserRegisterActions>) => {
        dispatch({type: UserRegisterDataActionTypes.USER_REGISTER_INPUT_REPEAT_PASSWORD, payload: event.target.value})
    }
}

export function userRegisterSubmit(event: React.MouseEvent<HTMLButtonElement>, user: UserRegisterData, redirect: any) {
    event.preventDefault()
    return async (dispatch: Dispatch<UserRegisterActions | IUserDataActions>) => {
        if (!user.name.trim() || !user.surName.trim() || !user.lastName.trim() || !user.password.trim() || !user.email.trim() || !user.repeat_password.trim()) {
            console.log('Всі поля мають бути заповнені')
             dispatch({type: UserRegisterDataActionTypes.USER_REGISTER_INPUT_ERROR, payload: "Всі поля не заповнені!"})
            setTimeout(()=> {
                dispatch({type: UserRegisterDataActionTypes.USER_REGISTER_INPUT_ERROR_NULL})
            }, 3000 )
            return
        }
        try {
            if (!(user.password === user.repeat_password)) {
                dispatch({type: UserRegisterDataActionTypes.USER_REGISTER_INPUT_ERROR, payload: "Паролі не співпадають!"})
                return setTimeout(()=> {
                    dispatch({type: UserRegisterDataActionTypes.USER_REGISTER_INPUT_ERROR_NULL})
                }, 3000)
            }
            const userData = {
                name : user.name,
                lastName: user.lastName,
                surName: user.surName,
                email: user.email,
                password: user.password
            }
            dispatch({type: IUserDataTypes.USER_DATA_TYPES_LOADING})
            const res = await $api.post<AuthResponse>("/registration", userData)
            localStorage.setItem("accessToken", res.data.accessToken)
            dispatch({type: IUserDataTypes.USER_DATA_TYPES_SUCCESS, payload: res.data.userData})
            dispatch({type: UserRegisterDataActionTypes.USER_REGISTER_INPUT_SUBMIT})
            redirect()
        } catch (e) {
            dispatch({type: IUserDataTypes.USER_DATA_TYPES_ERROR, payload: "Сталась помилка"})
        }
    }
}
