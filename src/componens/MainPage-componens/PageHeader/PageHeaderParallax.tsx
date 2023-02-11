import React, {FC} from 'react';
import "./page-header.css"
import {NavLink} from "react-router-dom";
const PageHeaderParallax: FC = () => {
    return (
        <div className={"page-header parallax"} >
            <div className="page-header-image">
                <div className="shadow">
                    <div className={"page-header-information"} >
                        <div className="row row-page-header-information">
                            <div className="next-conference row row-next-conference">
                                <h1 className={"next-conference-title"} >Наступна конференція 29.11 - 250 грн</h1>
                                <NavLink to={"/conferences/scheduled-conferences-page"} className="next-conference-detail-button">
                                    Детальніше

                                </NavLink>
                            </div>
                            <div className="nearest-monograph row row-nearest-monograph">
                                <h1 className={"nearest-monograph-title"} >Найближчий випуск монографії - 16.12</h1>
                                    <NavLink to={"/monographs/planned-monographs"}  className="nearest-monograph-detail-button">
                                          Детальніше
                                    </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHeaderParallax;