import {combineReducers} from "redux";
import {menuBergerReducer} from "./menuBurgerReducer";
import {scrollReducer} from "./scrollReducer";
import {userRegisterReducer} from "./userRegisterReducer";
import {userDataReducer} from "./userDataReducer";
import {LoginReducer} from "./LoginReducer";


const menu = combineReducers({
    menuBurger: menuBergerReducer
})

const user = combineReducers({
    userRegistrationData: userRegisterReducer,
    userData: userDataReducer,
    loginUser: LoginReducer
})

export const rootReducer = combineReducers({
    menu,
    scroll: scrollReducer,
    user
})

export type RootReducer = ReturnType<typeof rootReducer>