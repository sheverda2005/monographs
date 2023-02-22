import  {FC} from 'react';
import "./literatureAnalysisContent.css"
import {NavLink} from "react-router-dom";
const LiteratureAnalysisContent: FC = () => {
    return (
        <div className={"literature-analysis-content"}>
            <div className="container">
                <div className="row row-literature-analysis-content">
                    <div className="literature-analysis-content-text">
                        <p>Доброго дня.</p>
                        Ви студент або викладач і маєте написати статтю чи диплом? З нами легше, ми допоможемо відібрати значний обсяг матеріалів для Вашої роботи. Шановні автори, пропонуємо Вам скористатись можливістю отримати допомогу із проведення аналізу літератури. Можливо, це станеться у нагоді викладачам для написання тез та статей, а студентам для доповідей та дипломних робіт.
                        За Вашим замовленням ми можемо провести підбір статей, тез, монографій чи підручників у базі Скопус за ключовими словами.
                        <p>Припустимо, Ви замовили підібрати статті опубліковані лише у 2021 році за ключовими словами child + psychology  (діти + психологія), доступ відкритий + закритий.
                        </p>
                    </div>
                    <div className="literature-analysis-content-title">
                        <b>Результат представлено на знімку екрана.</b>
                    </div>
                    <div className="literature-analysis-content-img">
                        <img className={"literature-analysis-content-img-image"} src="/images/literature-analysis/Scopus.jpg.jpg" alt="Аналіз літератури картинка"/>
                    </div>
                    <div className="literature-analysis-content-text">
                        <p>Отриманої з анотації інформації може вистачити для написання оглядової статті, тез, доповіді, більшої частини дипломної роботи або першого розділу дисертаційного дослідження.</p>
                        <p>Посилання для цитування в форматі АРА прискорить складання переліку посилань для Вашої роботи.</p>
                    </div>
                    <div className="literature-analysis-content-title">
                        <b>Як це працює?</b>
                    </div>
                    <div className="literature-analysis-content-text">
                        <p>Ви подаєте на адресу <a className={"literature-analysis-content-text-link"} href="/">analiz@isg-konf.com</a> заявку для підбору публікації встановленого зразка та замовляєте підбір.</p>
                        <p><a className={"literature-analysis-content-text-link  literature-analysis-content-text-link-download"} href="https://isg-konf.com/wp-content/uploads/Заявка-на-аналіз-літератури.docx">Завантажити зразок заявки для підбору публікацій.</a></p>
                    </div>
                    <div className="literature-analysis-content-title">
                        <b>Вартість</b>
                    </div>
                    <div className="literature-analysis-content-text">
                        <p>Проведення аналізу коштуватиме 2 грн. за одне джерело, а з двох джерел у прикладі можна скласти 1,5 сторіки матеріалів.</p>
                        <p>Здійснити оплату можна на нашому сайті на сторінці <NavLink to={"/payment"} className={"literature-analysis-content-text-link"}>оплата</NavLink>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiteratureAnalysisContent;