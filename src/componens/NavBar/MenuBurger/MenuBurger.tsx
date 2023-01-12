import React from 'react';
import "./menu-burger.css"
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";


const MenuBurger = () => {
    const {click} = useTypedSelector(state => state.menu.menuBurger)
    const {menuBurgerNull, menuBurgerActive} = useActions()
    return (
        <div onClick={()=> {
            if (click) {
                return menuBurgerNull()
            }
            menuBurgerActive()
        }} className={`menu-burger ${click ? "active" : ''}`}>
            <div className="row row-menu-burger">
                <div className="burger-menu-item burger-menu-item_one"></div>
                <div className="burger-menu-item burger-menu-item_two"></div>
                <div className="burger-menu-item  burger-menu-item_three"></div>
            </div>
        </div>
    );
};

export default MenuBurger;