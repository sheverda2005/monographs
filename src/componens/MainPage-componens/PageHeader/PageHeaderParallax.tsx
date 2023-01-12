import React, {FC} from 'react';
import "./page-header.css"
const PageHeaderParallax: FC = () => {
    return (
        <div className={"page-header parallax"} >
            <div className="page-header-image">
                <div className="shadow">
                    <div className={"page-header-information"} >
                        <div className="row row-page-header-information">
                            <div className="next-conference row row-next-conference">
                                <h1 className={"next-conference-title"} >Наступна конференція 29.11 - 250 грн</h1>
                                <div className="next-conference-detail-button">
                                    Детальнише
                                </div>
                            </div>
                            <div className="nearest-monograph row row-nearest-monograph">
                                <h1 className={"nearest-monograph-title"} >Найближчий випуск монографії - 16.12</h1>
                                <div className="nearest-monograph-detail-button">
                                    Детальніше
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHeaderParallax;