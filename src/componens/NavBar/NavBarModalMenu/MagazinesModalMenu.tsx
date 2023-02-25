import React from 'react';
import {NavLink} from "react-router-dom";
import "./magazinesModalMenu.css"
const MagazinesModalMenu = () => {
    return (
        <div className={"magazines-modal-menu"} >
            <div className="magazines-modal-menu-fake-block">
            </div>
            <div className="magazines-modal-menu-content">
                <div className="row row-magazines-modal-menu-content">
                    <a className={"magazines-modal-menu-content-item-link"} href={"https://isg-journal.com/isjmef"}>Management, Economics & Finance</a>
                    <a className={"magazines-modal-menu-content-item-link"} href={"https://isg-journal.com/isjea"}>Engineering & Agriculture</a>
                    <a className={"magazines-modal-menu-content-item-link"} href={"https://isg-journal.com/isjel"}>Education & Linguistics</a>
                    <a className={"magazines-modal-menu-content-item-link"} href={"https://isg-journal.com/isjjp"}>Jurisprudence & Philosophy</a>
                </div>
            </div>
        </div>
    );
};

export default MagazinesModalMenu;