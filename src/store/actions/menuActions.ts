import {Dispatch} from "redux";
import {MenuBurgerActions, MenuBurgerTypes} from "../../models/menuBurgerModel";

export function menuBurgerActive() {
    return (dispatch: Dispatch<MenuBurgerActions>) => {
        dispatch({type: MenuBurgerTypes.MENU_BURGER_CLICK_ACTIVE})
    }
}

export function menuBurgerNull() {
    return (dispatch: Dispatch<MenuBurgerActions>) => {
        dispatch({type: MenuBurgerTypes.MENU_BURGER_CLICK_NULL})
    }
}