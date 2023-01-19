import {IUser} from "./userModel";

export interface IUserData {
    ActivationLink: string
    email: string
    id: string
    isActivated: boolean
    lastName: string
    name: string
    surName: string
    isAuth: boolean
    loading: boolean
    error: string | null
}

export enum IUserDataTypes {
    USER_DATA_TYPES_LOADING= "USER_DATA_TYPES_LOADING",
    USER_DATA_TYPES_SUCCESS="USER_DATA_TYPES_SUCCESS",
    USER_DATA_TYPES_ERROR="USER_DATA_TYPES_ERROR",
    USER_DATA_TYPES_CLEAR="USER_DATA_TYPES_CLEAR"
}

interface userDataLoading {
    type: IUserDataTypes.USER_DATA_TYPES_LOADING
}

interface userDataSuccess {
    type: IUserDataTypes.USER_DATA_TYPES_SUCCESS,
    payload: IUser
}

interface userDataError {
    type: IUserDataTypes.USER_DATA_TYPES_ERROR
    payload: string
}

interface userDataClear {
    type: IUserDataTypes.USER_DATA_TYPES_CLEAR
}

export type IUserDataActions = userDataLoading | userDataSuccess | userDataError | userDataClear