import {FC, useState} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {NavLink} from "react-router-dom";
import {useActions} from "../../../hooks/useActions";
import MenuBurger from "./MenuBurger";
import MenuBurgerAddOptionsConferences from "./menuBurgerAddOptionsConferences/MenuBurgerAddOptionsConferences";

const ModalBurgerMenu: FC = () => {
    const {click} = useTypedSelector(state => state.menu.menuBurger)
    const {scrollY} = useTypedSelector(state => state.scroll)
    const {menuBurgerNull} = useActions()
    const [clickConferencesAddOptions, setClickConferencesAddOptions] = useState<boolean>(false)
    function bodyCSS(): void {
        document.body.style.overflow = 'hidden'
    }
    if (click) {
        bodyCSS()
    }
    return (
        <div className={`modal-burger-menu ${click ? "active" : ''}`} >
                <ul className={"modal-burger-menu-nav-items"} >
                    <li onClick={()=> {
                        menuBurgerNull()
                    }} className={"modal-burger-menu-nav-item"} >
                        <NavLink className={"modal-burger-menu-nav-item-link"} to={"/"}>Головна</NavLink>
                    </li>
                    <li  className={"modal-burger-menu-nav-item row"}>
                            <NavLink onClick={()=> {
                                menuBurgerNull()
                            } } className={"modal-burger-menu-nav-item-link"} to={"/conferences"}>Конференції</NavLink>
                            <div onClick={()=> setClickConferencesAddOptions(!clickConferencesAddOptions) }
                                 className= { clickConferencesAddOptions ? "modal-burger-menu-nav-item-conferences-add-options-button-active" : "modal-burger-menu-nav-item-conferences-add-options-button"}></div>
                    </li>
                    <MenuBurgerAddOptionsConferences active={clickConferencesAddOptions}/>
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