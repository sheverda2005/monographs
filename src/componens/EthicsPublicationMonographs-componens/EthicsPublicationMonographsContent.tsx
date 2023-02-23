import {FC} from "react";
import "./ethicsPublicationMonographsContent.css"
const EthicsPublicationMonographsContent: FC = () => {
    return (
        <div className={"ethics-publication-monographs-content"}>
            <div className="container">
                <div className="row row-ethics-publication-monographs-content">
                    <div className="ethics-publication-monographs-content-text">
                        Колектив International Science Group готовий допомогти Вам з публікацією монографії, якщо дотримані всі правила її написання та оформлення. Тому щиро сподівається на вашу сумлінність та дотримання наступних рекомендацій:
                    </div>
                    <ol className={'ethics-publication-monographs-content-items'} >
                        <li>Не рекомендовано підроблювати результати досліджень. Тільки реальні цифри і факти.</li>
                        <li>Обов'язково варто давати посилання на першоджерело при використанні літератури.</li>
                        <li>Не допускати дублювання публікацій.</li>
                        <li>Потрібно наводити інформацію для перевірки і повторення експерименту іншими вченими.</li>
                        <li>Важливо відповідати за унікальність тексту і його наукову цінність.</li>
                        <li>Не можна перефразувати існуючі результати досліджень і публікувати їх.</li>
                    </ol>
                    <div className="ethics-publication-monographs-content-text">
                        Обов'язково ознайомтеся з правилами оформлення монографій у відповідному розділі. Монографії  проходять рецензування. Автор також повинен всіляко сприяти поліпшенню якості тексту і при виявленні неточностей або помилок на етапі розгляду одразу повідомити видавництво.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EthicsPublicationMonographsContent;