import React from 'react';
import "./scheduledConferencesPageContant.css"
import ConferencesPageTables from "./conferencesPageTables";
import {ConferencesPageTablesData} from "./ConferencesPageTablesData";
const ScheduledConferencesPageContant = () => {
    return (
        <div className={"scheduled-conferences-page-contant"}>
            <div className="container">
                <div className="row row-scheduled-conferences-page-contant">
                    <div className="scheduled-conferences-page-contant-title">
                        Запрошуємо викладачів, вчених, дослідників, науковців та аспірантів опублікувати статтю у закордонному науковому періодичному виданні зареєстрованому у країні ЄС. Детальніше за посиланням isg-journal.com.
                    </div>
                    <ConferencesPageTables tables={ConferencesPageTablesData}/>
                    <div className="scheduled-conferences-page-contant-text">
                        Міжнародні науково-практичні конференції проводяться щотижня у Канаді, США, Туреччині, Ізраїлі, Чехії, Португалії та інших країнах. Перелік тем й дат проведення конференцій можна переглянути на сторінці наукових конференцій, тому напрямок можна обрати заздалегідь.

                        Кожна конференція зареєстрована в базі науково-технічних заходів УкрІНТЕІ запланованих на 2023 рік та включена до каталогу міжнародних конференцій на офіційному вебсайті Academic Research Index. Також кожній книзі присвоюється міжнародний унікальний номер книги ISBN та DOI.

                        Підтвердженням участі в міжнародній науково-практичній конференції є сертифікат учасника, який стає доступним для перегляду та завантаження в день публікації збірника матеріалів. Опубліковані матеріали науково-практичних конференцій знаходяться в відкритому доступі на сторінці Архіву конференцій.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduledConferencesPageContant;