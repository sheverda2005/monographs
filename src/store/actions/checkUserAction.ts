import {Dispatch} from "redux";
import {IUserDataActions, IUserDataTypes} from "../../models/userDataModel";
import $api from "../../http";
import {AuthResponse} from "../../models/AuthResponse";


export function checkUser() {
    return async (dispatch: Dispatch<IUserDataActions>) => {
        try {
            if (!localStorage.getItem("accessToken")) {
                return
            }
            dispatch({type: IUserDataTypes.USER_DATA_TYPES_LOADING})
            const res = await $api.post<AuthResponse>("/checkTokens")
            localStorage.setItem("accessToken", res.data.accessToken)
            dispatch({type: IUserDataTypes.USER_DATA_TYPES_SUCCESS, payload: res.data.userData})
        } catch (e) {
            dispatch({type: IUserDataTypes.USER_DATA_TYPES_ERROR, payload: "Сталась помилка"})
        }
    }
}