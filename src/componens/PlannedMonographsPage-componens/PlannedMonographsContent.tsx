import React from 'react';
import "./plannedMonographsContent.css"
import PlannedMonographsTable from "./PlannedMonographsTable";
const PlannedMonographsContent = () => {
    return (
        <div className={"planned-monographs-content"} >
            <div className="container">
                <div className="row row-planned-monographs-content">
                    <div className="planned-monographs-content-title">
                        Для учасників з України розмір оргвнеску під час подання матеріалів до колективної монографії становить 70 грн. За сторінку тексту.
                    </div>
                    <PlannedMonographsTable/>
                    <div className="planned-monographs-content-content">
                        <div className="planned-monographs-content-text">
                            Колективом ISG розпочато публікацію одноосібних монографій та монографій у співавторстві, які розміщатимуться на відповідних сайтах протягом 10 днів з моменту їх прийняття до публікації. Видання даних монографій оговорюється в індивідуальному порядку. Приклади опублікованих монографій можна переглянути на сторінці архіву.
                            <p> <b>Відповідно до пункту  38.</b> <a className={"planned-monographs-content-text-link"} href="https://zakon.rada.gov.ua/laws/show/365-2021-%D0%BF#Text">Ліцензійних умов провадження освітньої діяльності</a>  з 20.06.2021 року до досягнень у професійній діяльності, які зараховуються за останні п’ять років, у тому числі відноситься  наявність виданого підручника чи навчального посібника (включаючи електронні) або монографії (загальним обсягом не менше 5 авторських аркушів), в тому числі видані у співавторстві (обсягом не менше 1,5 авторського аркуша на кожного співавтора).</p>
                            <p> <b>Згідно з</b> <a className={"planned-monographs-content-text-link"} href="https://zakon.rada.gov.ua/laws/show/z0155-17#Text">Додатком 4 до Вимог до оформлення дисертації (пункт 14 розділу ІІІ)</a> один авторський аркуш дорівнює 40 тис. друкованих знаків, враховуючи цифри, розділові знаки, проміжки між словами, що становить близько 24 сторінок друкованого тексту при оформленні дисертації за допомогою комп'ютерної техніки з використанням текстового редактора Word: шрифт - Times New Roman, розмір шрифту - 14 рt.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlannedMonographsContent;