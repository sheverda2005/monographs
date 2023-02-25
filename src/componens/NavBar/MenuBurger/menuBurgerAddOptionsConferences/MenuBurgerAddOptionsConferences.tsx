import React, {FC} from 'react';
import "./menuBurgerAddOptions.css"
import {NavLink} from "react-router-dom";
import {useActions} from "../../../../hooks/useActions";
interface IMenuBurgerAddOptionsConferences {
    active: boolean
}
const MenuBurgerAddOptionsConferences: FC<IMenuBurgerAddOptionsConferences> = ({active}) => {
    const {menuBurgerNull} = useActions()
    if (active) {
        return (
            <div className={'menu-burger-add-options'}>
                <div className="row row-menu-burger-add-options">
                    <NavLink onClick={()=> menuBurgerNull()} className={'menu-burger-add-options-link'} to={"/conferences/scheduled-conferences-page"}>Заплановані конференції</NavLink>
                    <NavLink onClick={()=> menuBurgerNull()} className={"menu-burger-add-options-link"} to={"/conferences/submission-execution-theses"}>Подання та оформлення тез</NavLink>
                    <NavLink onClick={()=> menuBurgerNull()} className={"menu-burger-add-options-link"} to={"/conferences/literature-analysis"}>Аналіз літератури</NavLink>
                    <NavLink onClick={()=> menuBurgerNull()} className={"menu-burger-add-options-link"} to={"/conferences/ethics-publications"}>Етика публікацій</NavLink>
                    <NavLink onClick={()=> menuBurgerNull()} className={"menu-burger-add-options-link"} to={"/conferences/indexing"}>Індексація</NavLink>
                    <NavLink onClick={()=> menuBurgerNull()} className={"menu-burger-add-options-link"} to={"/conferences/editorial-board"}>Редакційна колегія</NavLink>
                    <NavLink onClick={()=> menuBurgerNull()} className={"menu-burger-add-options-link"} to={"/"}>Архів</NavLink>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default MenuBurgerAddOptionsConferences;