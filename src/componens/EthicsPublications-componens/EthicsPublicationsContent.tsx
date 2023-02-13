import React from 'react';
import "./ethicsPublicationsContent.css"
const EthicsPublicationsContent = () => {
    return (
        <div className={"ethics-publications-content"}>
            <div className="container">
                <div className="row row-ethics-publications-content">
                    <h1 className={"ethics-publications-content-title"}>
                        Шановні автори, пам'ятайте, що при поданні тез для участі в міжнародній конференції варто керуватися етикою публікацій. Колектив International Science Group щиро сподівається на вашу сумлінність та дотримання наступних рекомендацій:
                    </h1>
                    <ol className={"ethics-publications-content-ol-items"}>
                        <li>
                            Подавати виключно достовірні результати досліджень. Фальсифікація і заздалегідь хибні судження неприпустимі.
                        </li>
                        <li>
                            Гарантувати унікальність матеріалів, оформляти фрагменти чужих робіт із зазначенням автора і першоджерела.
                        </li>
                        <li>
                            Не допускати плагіату, перефразування чужих тверджень, використання результатів чужих досліджень в будь-якому вигляді.
                        </li>
                        <li>
                            Не публікувати тези повторно і не відправляти їх на кілька конференцій відразу.
                        </li>
                        <li>
                            Повідомляти редакцію про виявлені помилки на етапі формування збірника або незабаром після його публікації.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default EthicsPublicationsContent;