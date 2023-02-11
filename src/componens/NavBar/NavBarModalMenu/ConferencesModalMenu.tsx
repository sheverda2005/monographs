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
                        <NavLink className={"conferences-modal-menu-content-item-link"} to={"/"}>Подання тез</NavLink>
                        <NavLink className={"conferences-modal-menu-content-item-link"} to={"/"}>Аналіз літератури</NavLink>
                        <NavLink className={"conferences-modal-menu-content-item-link"} to={"/"}>Етика публікацій</NavLink>
                        <NavLink className={"conferences-modal-menu-content-item-link"} to={"/"}>Індексація</NavLink>
                        <NavLink className={"conferences-modal-menu-content-item-link"} to={"/"}>Редакційна колегія</NavLink>
                        <NavLink className={"conferences-modal-menu-content-item-link"} to={"/"}>Архів</NavLink>
                </div>
            </div>
        </div>
    );
};

export default ConferencesModalMenu;