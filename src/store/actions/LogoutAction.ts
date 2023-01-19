import {Dispatch} from "redux";
import {IUserDataActions, IUserDataTypes} from "../../models/userDataModel";
import axios from "axios";
import $api from "../../http";


export function logout() {
    return  async (dispatch: Dispatch<IUserDataActions>) => {
        try {
            dispatch({type:IUserDataTypes.USER_DATA_TYPES_LOADING})
            const res = await $api.post("/logout")
            localStorage.removeItem("accessToken")
            dispatch({type: IUserDataTypes.USER_DATA_TYPES_CLEAR})
        } catch (e) {
            console.log(e)
        }
    }
}