import React from 'react';
import {NavLink} from "react-router-dom";
import "./monographsModalMenu.css"
const MonographsModalMenu = () => {
    return (
        <div className={"monographs-modal-menu"} >
            <div className="monographs-modal-menu-fake-block">
            </div>
            <div className="monographs-modal-menu-content">
                <div className="row row-monographs-modal-menu-content">
                    <NavLink className={"monographs-modal-menu-content-item-link"} to={"/monographs/planned-monographs"}>Заплановані монографії</NavLink>
                    <NavLink className={"monographs-modal-menu-content-item-link"} to={"/monographs/presentation-design-monographs"}>Подання та оформлення</NavLink>
                    <NavLink className={"monographs-modal-menu-content-item-link"} to={"/monographs/literature-analysis"}>Аналіз літератури</NavLink>
                    <NavLink className={"monographs-modal-menu-content-item-link"} to={"/monographs/reviewers-page"}>Рецензенти</NavLink>
                    <NavLink className={"monographs-modal-menu-content-item-link"} to={"/monographs/indexing-monographs"}>Індексація</NavLink>
                    <NavLink className={"monographs-modal-menu-content-item-link"} to={"/monographs/ethics-publication-monographs-page"}>Етика публікацій</NavLink>
                    <NavLink className={"monographs-modal-menu-content-item-link"} to={"/null"}>Архів</NavLink>
                </div>
            </div>
        </div>
    );
};

export default MonographsModalMenu;