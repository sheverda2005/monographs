import React, {FC} from 'react';
import "./whyUs.css"
const WhyUs: FC = () => {
    return (
        <div className={"why-us"}>
            <div className="container">
                <div className="row row-why-us">
                    <div className="why-us-information">
                        <div className="barge barge-why-us">Чому ми</div>
                        <div className="title-why-us">ДОПОМАГАЄМО НАВЧАТИСЯ В УНІВЕРСИТЕТАХ КРАЇН ЄС ЗА ПРОГРАМОЮ «ПОДВІЙНИЙ ДИПЛОМ»</div>
                        <div className="text-why-us">Громадська організація «Міжнародна фундація науковців та освітян» надає допомогу у виборі та співпраці для реалізації навчальних програм «Подвійний Диплом» та «Erasmus+» в Університетах країн ЄС як для громадян України так і для іноземних громадян.</div>
                    </div>
                    <img src="/images/erasmus.png" className={"why-us-img"}/>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;