import {FC} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {NavLink} from "react-router-dom";
import {useActions} from "../../../hooks/useActions";
import MenuBurger from "./MenuBurger";

const ModalBurgerMenu: FC = () => {
    const {click} = useTypedSelector(state => state.menu.menuBurger)
    const {scrollY} = useTypedSelector(state => state.scroll)
    const {menuBurgerNull} = useActions()
    return (
        <div className={`modal-burger-menu ${click ? "active" : ''}`} >
                <ul className={"modal-burger-menu-nav-items"} >
                    <li onClick={()=> {
                        menuBurgerNull()
                    }} className={"modal-burger-menu-nav-item"} >
                        <NavLink className={"modal-burger-menu-nav-item-link"} to={"/"}>Головна</NavLink>
                    </li>
                    <li onClick={()=> {
                        menuBurgerNull()
                    }} className={"modal-burger-menu-nav-item"}>
                        <NavLink className={"modal-burger-menu-nav-item-link"} to={"/conferences"}>Конференції</NavLink>
                    </li>
                    <li onClick={()=> {
                        menuBurgerNull()
                    }} className={"modal-burger-menu-nav-item"} >
                        <NavLink className={"modal-burger-menu-nav-item-link"} to={"/monographs"}>Монографії</NavLink>
                    </li>
                    <li onClick={()=> {
                        menuBurgerNull()
                    }} className={"modal-burger-menu-nav-item"}>
                        <NavLink className={"modal-burger-menu-nav-item-link"} to={"/manuals"}>Посібники</NavLink>
                    </li>
                    <li onClick={()=> {
                        menuBurgerNull()
                    }} className={"modal-burger-menu-nav-item"} >
                        <NavLink className={"modal-burger-menu-nav-item-link"} to={"/magazines"}> Журнали</NavLink></li>
                    <li onClick={()=> {
                        menuBurgerNull()
                    }} className={"modal-burger-menu-nav-item"} >
                        <NavLink className={"modal-burger-menu-nav-item-link"} to={"/internship"}>Стажування в ЄС</NavLink>
                    </li>
                    <li onClick={()=> {
                        menuBurgerNull()
                    }} className={"modal-burger-menu-nav-item"}>
                        <NavLink className={"modal-burger-menu-nav-item-link"} to={"/payment"}>Оплата</NavLink>
                    </li>
                    <li onClick={()=> {
                        menuBurgerNull()
                    }} className={"modal-burger-menu-nav-item"}>
                        <NavLink className={"modal-burger-menu-nav-item-link"} to={"/contacts"}>Контакти</NavLink>
                    </li>
                </ul>
        </div>
    );
};

export default ModalBurgerMenu;