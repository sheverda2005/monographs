import React, {FC} from 'react';
import "./aboutOrganization.css"
const AboutOrganization: FC= () => {
    return (
        <div className={"aboutOrganization"}>
            <div className={"container container-aboutOrganization"}>
                <div className="row row-aboutOrganization">
                    <img className={"logo-img-aboutOrganization aboutOrganization-row-element"} src="/images/mainPageGeneral.jpg" alt="LOGO"/>
                    <div className="informationAboutOrganization aboutOrganization-row-element">
                            <div className="barge barge-informationAboutOrganization">Про нас</div>
                             <div className="title-informationAboutOrganization informationAboutOrganization-element">
                                 Вітаємо на сторінці громадської організації «МІЖНАРОДНА ФУНДАЦІЯ НАУКОВЦІВ ТА ОСВІТЯН»
                             </div>
                             <div className="description-informationAboutOrganization informationAboutOrganization-element">
                                 Громадська організація «МІЖНАРОДНА ФУНДАЦІЯ НАУКОВЦІВ ТА ОСВІТЯН» (ГО "МФНО", INTERNATIONAL EDUCATORS AND SCHOLARS FOUNDATION, IESF) є добровільним об'єднанням фізичних осіб, створеним для об’єднання наукового та освітянського потенціалу України для розвитку міжнародної наукової трансінтеграції.
                             </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutOrganization;