import { FC } from "react";
import "./NavBar-style.css"
import MenuBurger from "./MenuBurger/MenuBurger";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {NavLink} from "react-router-dom";
import ModalBurgerMenu from "./MenuBurger/ModalBurgerMenu";
const NavBar: FC = () => {
    const {scrollY} = useTypedSelector(state => state.scroll)
    return (
       <div className={"navigation-bar"}>
           <nav   className={!!scrollY ? "main-navigation scrollY" : "main-navigation"}>
               <div className="container">
                   <div className="row row-menu">
                       <MenuBurger/>
                       <div className="nav-logo-menu">
                           <div className="row">        
                               <div className="logo">
                                   <img src="/images/logo_2.png" className={"logo-img"} alt=""/>
                               </div>
                               <div className="navigator-menu">
                                   <ul className={"row row-nav-items  nav-items"}>
                                       <li className={"nav-item"}>
                                           <NavLink className={"nav-item-link"} to={"/"}>Головна</NavLink>
                                       </li>
                                       <li className={"nav-item"}>
                                           <NavLink className={"nav-item-link"} to={"/conferences"}>Конференції</NavLink>
                                       </li>
                                       <li className={"nav-item"} >
                                           <NavLink className={"nav-item-link"} to={"/monographs"}>Монографії</NavLink>
                                       </li>
                                       <li className={"nav-item"} >
                                           <NavLink className={"nav-item-link"} to={"/manuals"}>Посібники</NavLink>
                                       </li>
                                       <li className={"nav-item"} >
                                           <NavLink className={"nav-item-link"} to={"/magazines"}> Журнали</NavLink>
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
                           <NavLink to={"/authorization"} className="authorization-button">Авторизація</NavLink>
                   </div>
               </div>
           </nav>
           <ModalBurgerMenu/>
       </div>

    );
};

export default NavBar;