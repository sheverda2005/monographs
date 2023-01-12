export interface MenuBurgerModel {
    click: string | null
}

export enum MenuBurgerTypes {
    MENU_BURGER_CLICK_ACTIVE = "MENU_BURGER_CLICK_ACTIVE",
    MENU_BURGER_CLICK_NULL = "MENU_BURGER_CLICK_NULL",
}

interface menuBurgerClickActive {
    type: MenuBurgerTypes.MENU_BURGER_CLICK_ACTIVE
}

interface menuBurgerClickNull {
    type: MenuBurgerTypes.MENU_BURGER_CLICK_NULL
}

export type MenuBurgerActions = menuBurgerClickActive | menuBurgerClickNull