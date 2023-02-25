import React, {FC} from 'react';
import {useActions} from "../../../../hooks/useActions";
import {NavLink} from "react-router-dom";
import './menuBurgerAddOptions.css'

interface IMenuBurgerAddOptionsMonographs {
    active: boolean
}
const MenuBurgerAddOptionsMonographs: FC<IMenuBurgerAddOptionsMonographs> = ({active}) => {
    const {menuBurgerNull} = useActions()
    if (active) {

        return (
            <div className={'menu-burger-add-options'}>
                <div className="row row-menu-burger-add-options">
                    <NavLink onClick={()=> menuBurgerNull()} className={'menu-burger-add-options-link'}  to={"/monographs/planned-monographs"}>Заплановані монографії</NavLink>
                    <NavLink onClick={()=> menuBurgerNull()} className={'menu-burger-add-options-link'}  to={"/monographs/presentation-design-monographs"}>Подання та оформлення</NavLink>
                    <NavLink onClick={()=> menuBurgerNull()} className={'menu-burger-add-options-link'}  to={"/monographs/literature-analysis"}>Аналіз літератури</NavLink>
                    <NavLink onClick={()=> menuBurgerNull()} className={'menu-burger-add-options-link'}  to={"/monographs/reviewers-page"}>Рецензенти</NavLink>
                    <NavLink onClick={()=> menuBurgerNull()} className={'menu-burger-add-options-link'}  to={"/monographs/indexing-monographs"}>Індексація</NavLink>
                    <NavLink onClick={()=> menuBurgerNull()} className={'menu-burger-add-options-link'}  to={"/monographs/ethics-publication-monographs-page"}>Етика публікацій</NavLink>
                    <NavLink onClick={()=> menuBurgerNull()} className={'menu-burger-add-options-link'}  to={"/"}>Архів</NavLink>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default MenuBurgerAddOptionsMonographs;