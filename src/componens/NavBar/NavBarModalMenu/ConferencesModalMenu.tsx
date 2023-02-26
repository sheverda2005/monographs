import "./conferencesModalMenu.css"
import {NavLink} from "react-router-dom";
const ConferencesModalMenu = () => {
    return (
        <div className={"conferences-modal-menu"} >
            <div className="conferences-modal-menu-fake-block">
            </div>
            <div className="conferences-modal-menu-content">
                <div className="row row-conferences-modal-menu-content">
                        <NavLink className={"conferences-modal-menu-content-item-link"} to={"/conferences/scheduled-conferences-page"}>Заплановані конференції</NavLink>
                        <NavLink className={"conferences-modal-menu-content-item-link"} to={"/conferences/submission-execution-theses"}>Подання та оформлення тез</NavLink>
                        <NavLink className={"conferences-modal-menu-content-item-link"} to={"/conferences/literature-analysis"}>Аналіз літератури</NavLink>
                        <NavLink className={"conferences-modal-menu-content-item-link"} to={"/conferences/ethics-publications"}>Етика публікацій</NavLink>
                        <NavLink className={"conferences-modal-menu-content-item-link"} to={"/conferences/indexing"}>Індексація</NavLink>
                        <NavLink className={"conferences-modal-menu-content-item-link"} to={"/conferences/editorial-board"}>Редакційна колегія</NavLink>
                        <NavLink className={"conferences-modal-menu-content-item-link"} to={"/null"}>Архів</NavLink>
                </div>
            </div>
        </div>
    );
};

export default ConferencesModalMenu;