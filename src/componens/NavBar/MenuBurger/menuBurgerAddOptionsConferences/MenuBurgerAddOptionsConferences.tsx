import React, {FC} from 'react';
import "./menuBurgerAddOptionsConferences.css"
import {NavLink} from "react-router-dom";
interface IMenuBurgerAddOptionsConferences {
    active: boolean
}
const MenuBurgerAddOptionsConferences: FC<IMenuBurgerAddOptionsConferences> = ({active}) => {
    if (active) {
        return (
            <div className={'menu-burger-add-options-conferences'}>
                <div className="row row-menu-burger-add-options-conferences">
                    <NavLink className={'menu-burger-add-options-conferences-link'} to={"/conferences/scheduled-conferences-page"}>Заплановані конференції</NavLink>
                    <NavLink className={"menu-burger-add-options-conferences-link"} to={"/conferences/submission-execution-theses"}>Подання та оформлення тез</NavLink>
                    <NavLink className={"menu-burger-add-options-conferences-link"} to={"/conferences/literature-analysis"}>Аналіз літератури</NavLink>
                    <NavLink className={"menu-burger-add-options-conferences-link"} to={"/conferences/ethics-publications"}>Етика публікацій</NavLink>
                    <NavLink className={"menu-burger-add-options-conferences-link"} to={"/conferences/indexing"}>Індексація</NavLink>
                    <NavLink className={"menu-burger-add-options-conferences-link"} to={"/conferences/editorial-board"}>Редакційна колегія</NavLink>
                    <NavLink className={"menu-burger-add-options-conferences-link"} to={"/"}>Архів</NavLink>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default MenuBurgerAddOptionsConferences;