import {MenuBurgerActions, MenuBurgerModel, MenuBurgerTypes} from "../../models/menuBurgerModel";

const initialState: MenuBurgerModel = {
    click: null
}

export const menuBergerReducer = (state = initialState, action: MenuBurgerActions): MenuBurgerModel => {
    switch (action.type) {
        case MenuBurgerTypes.MENU_BURGER_CLICK_ACTIVE:
            return {...state, click: 'active'}
        case MenuBurgerTypes.MENU_BURGER_CLICK_NULL:
            return {...state, click: null}
        default:
            return state;
    }
}