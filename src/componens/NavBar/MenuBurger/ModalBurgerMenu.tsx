import {FC, useEffect, useState} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {NavLink} from "react-router-dom";
import {useActions} from "../../../hooks/useActions";
import MenuBurger from "./MenuBurger";
import MenuBurgerAddOptionsConferences from "./menuBurgerAddOptionsConferences/MenuBurgerAddOptionsConferences";
import MenuBurgerAddOptionsMonographs from "./menuBurgerAddOptionsConferences/MenuBurgerAddOptionsMonographs";

const ModalBurgerMenu: FC = () => {
    const {click} = useTypedSelector(state => state.menu.menuBurger)
    const {scrollY} = useTypedSelector(state => state.scroll)
    const {menuBurgerNull} = useActions()
    const [clickConferencesAddOptions, setClickConferencesAddOptions] = useState<boolean>(false)
    const [clickMonographsAddOptions, setClickMonographsAddOptions] = useState<boolean>(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function bodyCSSHidden(): void {
        document.body.style.overflow = 'hidden'
    }
    function bodyCSSAuto(): void {
        document.body.style.overflow = 'auto'
    }
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth >= 1150) {
            bodyCSSAuto()
        } else {
            if (click) {
                bodyCSSHidden()
            } else if (!click) {
                bodyCSSAuto()
            }
        }
    }, [windowWidth]);

    return (
        <div className={`modal-burger-menu ${click ? "active" : ''}`} >
                <ul className={"modal-burger-menu-nav-items"} >
                    <li onClick={()=> {
                        menuBurgerNull()
                    }} className={"modal-burger-menu-nav-item"} >
                        <NavLink className={"modal-burger-menu-nav-item-link"} to={"/"}>Головна</NavLink>
                    </li>
                    <li  className={"modal-burger-menu-nav-item row"}>
                            <NavLink onClick={()=> {menuBurgerNull()} } className={"modal-burger-menu-nav-item-link"} to={"/conferences"}>Конференції</NavLink>
                            <div onClick={()=> setClickConferencesAddOptions(!clickConferencesAddOptions) }
                                 className= { clickConferencesAddOptions ? "modal-burger-menu-nav-item-conferences-add-options-button-active" : "modal-burger-menu-nav-item-conferences-add-options-button"}></div>
                    </li>
                    <MenuBurgerAddOptionsConferences active={clickConferencesAddOptions}/>
                    <li className={"modal-burger-menu-nav-item row"} >
                        <NavLink onClick={()=> {
                            menuBurgerNull()
                        }}  className={"modal-burger-menu-nav-item-link"} to={"/monographs"}>Монографії</NavLink>
                        <div onClick={() => setClickMonographsAddOptions(!clickMonographsAddOptions)} className={clickMonographsAddOptions ? "modal-burger-menu-nav-item-monographs-add-options-button-active" : "modal-burger-menu-nav-item-monographs-add-options-button" } ></div>
                    </li>
                    <MenuBurgerAddOptionsMonographs active={clickMonographsAddOptions}/>
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

