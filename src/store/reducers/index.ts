import {combineReducers} from "redux";
import {menuBergerReducer} from "./menuBurgerReducer";
import {scrollReducer} from "./scrollReducer";


const menu = combineReducers({
    menuBurger: menuBergerReducer
})

export const rootReducer = combineReducers({
    menu,
    scroll: scrollReducer
})

export type RootReducer = ReturnType<typeof rootReducer>