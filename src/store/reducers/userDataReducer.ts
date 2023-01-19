import {IUserData, IUserDataActions, IUserDataTypes} from "../../models/userDataModel";


const initialState: IUserData = {
    name: "",
    email: "",
    lastName: "",
    id: "",
    surName: "",
    ActivationLink: "",
    isActivated: false,
    isAuth: false,
    loading: false,
    error: null
}

export const userDataReducer = (state = initialState, action: IUserDataActions): IUserData => {
    switch (action.type) {
        case IUserDataTypes.USER_DATA_TYPES_LOADING:
            return {...state, loading: true}
        case IUserDataTypes.USER_DATA_TYPES_SUCCESS:
            return {...state,
                loading: false,
                isAuth: true,
                surName: action.payload.surName,
                email: action.payload.email,
                name: action.payload.name,
                isActivated: action.payload.isActivated,
                lastName: action.payload.lastName,
                id: action.payload.id,
                ActivationLink: action.payload.ActivationLink
            }
        case IUserDataTypes.USER_DATA_TYPES_ERROR:
            return {...state, error: action.payload}
        case IUserDataTypes.USER_DATA_TYPES_CLEAR:
            return {...state,
                email: "",
                surName: "",
                lastName: '',
                name: "",
                isAuth: false,
                error: null,
                ActivationLink: "",
                id: "",
                isActivated: false,
                loading: false
            }
        default:
            return state;
    }
}