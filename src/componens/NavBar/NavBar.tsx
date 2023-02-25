import { FC } from "react";
import "./NavBar-style.css"
import MenuBurger from "./MenuBurger/MenuBurger";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {NavLink} from "react-router-dom";
import ModalBurgerMenu from "./MenuBurger/ModalBurgerMenu";
import SpinnerButton from "../Spinner/SpinnerButton";
import ConferencesModalMenu from "./NavBarModalMenu/ConferencesModalMenu";
import MonographsModalMenu from "./NavBarModalMenu/MonographsModalMenu";
import MagazinesModalMenu from "./NavBarModalMenu/MagazinesModalMenu";
const NavBar: FC = () => {
    const {scrollY} = useTypedSelector(state => state.scroll)
    const {isAuth, loading} = useTypedSelector(state => state.user.userData)
    return (
       <div className={"navigation-bar"}>
           <nav   className={!!scrollY ? "main-navigation scrollY" : "main-navigation"}>
               <div className="container">
                   <div className="row row-menu">
                       <MenuBurger/>
                       <div className="nav-logo-menu">
                           <div className="row">
                               <NavLink to={"/"} >
                                   <div className="logo">
                                       <img src="/images/logo_2.png" className={"logo-img"} alt=""/>
                                   </div>
                               </NavLink>
                               <div className="navigator-menu">
                                   <ul className={"row row-nav-items  nav-items"}>
                                       <li className={"nav-item"}>
                                           <NavLink className={"nav-item-link"} to={"/"}>Головна</NavLink>
                                       </li>
                                       <li className={"nav-item nav-item-conferences row row-nav-item-link-conferences"}>
                                           <NavLink className={"nav-item-link nav-item-link-conferences"} to={"/conferences"}>Конференції
                                           </NavLink>
                                           <ConferencesModalMenu/>
                                       </li>
                                       <li className={"nav-item nav-item-monographs row row-nav-item-link-monographs"} >
                                           <NavLink className={"nav-item-link nav-item-link-monographs"} to={"/monographs"}>Монографії</NavLink>
                                           <MonographsModalMenu/>
                                   </li>
                                       <li className={"nav-item"} >
                                           <NavLink className={"nav-item-link"} to={"/manuals"}>Посібники</NavLink>
                                       </li>
                                       <li className={"nav-item nav-item-magazines row row-nav-item-link-magazines"} >
                                           <div className={"nav-item-link nav-item-link-magazines"} > Журнали</div>
                                           <MagazinesModalMenu/>
                                       </li>
                                       <li className={"nav-item"} >
                                           <NavLink className={"nav-item-link"} to={"/internship"}>Стажування в ЄС</NavLink>
                                       </li>
                                       <li className={"nav-item"}>
                                           <NavLink className={"nav-item-link"} to={"/payment"}>Оплата</NavLink>
                                       </li>
                                       <li className={"nav-item"}>
                                           <NavLink className={"nav-item-link"} to={"/contacts"}>Контакти</NavLink>
                                       </li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                       {loading ? <NavLink to={"/"} className="loading-spinner-button" > <SpinnerButton/> </NavLink> :  isAuth ?  <NavLink to={"/account"} className="account-button" >Профіль</NavLink>:  <NavLink to={"/authorization"} className="authorization-button">Авторизація</NavLink>}
                   </div>
               </div>
           </nav>
           <ModalBurgerMenu/>
       </div>

    );
};

export default NavBar;