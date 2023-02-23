import {FC} from "react";
import "./indexingMonographsContent.css"
const IndexingMonographsContent: FC = () => {
    return (
        <div className={"indexing-monographs-content"} >
            <div className="container">
                <div className="row row-indexing-monographs-content">
                    <div className="indexing-monographs-images-links">
                        <div className="row row-indexing-monographs-images-links">
                            <a className={"indexing-monographs-images-links-link"} href="https://www.doi.org/">
                                <img className={"indexing-monographs-images-links-img"} src="/images/indexing-conferences/DOI_logo.svg_.png.jpg" alt="DOI_logo"/>
                            </a>
                            <a className={"indexing-monographs-images-links-link"} href="https://search.crossref.org/?q=International+Scientific+and+Practical+Conference&publisher-name=International+Science+Group&from_ui=yes">
                                <img className={"indexing-monographs-images-links-img"} src="/images/indexing-conferences/Crossref_Logo_Stacked_RGB_SMALL.png.jpg" alt="Crossref"/>
                            </a>
                            <a className={"indexing-monographs-images-links-link"} href="https://ouci.dntb.gov.ua/?title=&publisher=International+Science+Group&pub_type=proceedings">
                                <img className={"indexing-monographs-images-links-img"} src="/images/indexing-conferences/OUCI.png"  alt="OUCI"/>
                            </a>
                        </div>
                    </div>
                    <div className="indexing-monographs-content-text">
                        <p className={"indexing-monographs-content-text-paragraph"} >
                            International Science Group публікує монографії з їх подальшою індексацією в наукометричних базах даних, а саме:
                            <a className={"indexing-monographs-content-text-link"}
                            href="https://search.crossref.org/?q=International+Scientific+and+Practical+Conference&publisher-name=International+Science+Group&from_ui=yes">Crossref</a>, <a className={"indexing-monographs-content-text-link"}
                            href="https://www.doi.org/">DOI</a> та <a className={"indexing-monographs-content-text-link"} href="https://ouci.dntb.gov.ua/?title=&publisher=International+Science+Group&pub_type=monograph">OUCI</a>.
                        </p>
                       <p className={"indexing-monographs-content-text-paragraph"} >
                           Одна з основних переваг публікації в колективній монографії – індексація в <a className={"indexing-monographs-content-text-link"} href="https://search.crossref.org/?q=International+Scientific+and+Practical+Conference&publisher-name=International+Science+Group&from_ui=yes">Crossref</a> і OUCI. Кожен збірник міжнародної монографії додається в пошукову систему і базу даних наукових цитувань – <a className={"indexing-monographs-content-text-link"} href="https://ouci.dntb.gov.ua/">Open Ukrainian Citation Index (OUCI)</a>. База <a className={'indexing-monographs-content-text-link'}
                           href="https://ouci.dntb.gov.ua/?title=&publisher=International+Science+Group&pub_type=monograph">OUCI</a> містить метадані наукових видань, через неї дуже зручно шукати наукову літературу і знаходити цитатні зв'язки між науковими документами.
                       </p>
                        <p className={"indexing-monographs-content-text-paragraph"} >
                            Збірники міжнародних монографій публікуються на сайті International Science Group і <a className={"indexing-monographs-content-text-link"}
                            href="https://www.bookwire.com/books/author/International-Science-Group/Books-By?authorId=76314106">BookwireTM</a>. Видавництвом США присвоюється міжнародний ISBN номер книги. Публікуючи свої матеріали, ви можете розраховувати на захист авторського права. Тепер ніхто не вирішить використовувати результати ваших досліджень без посилання на першоджерело.
                        </p>
                        <p className={"indexing-monographs-content-text-paragraph"} >
                            Індексація в <a className={"indexing-monographs-content-text-link"} href="https://ouci.dntb.gov.ua/?title=&publisher=International+Science+Group&pub_type=monograph">OUCI</a> та Crossref дозволяє різко збільшити популярність і доступність видань по всьому світу. Публікація монографії в електронному вигляді відкриває доступ до матеріалу через Google Books. Розміщення електронної монографії сприяє зростанню популярності автора роботи та дозволяє зміцнити авторитет у світі науки.
                            Слідкуйте за майбутніми науковими монографіями. Публікуйтеся й отримуйте персональні сертифікати учасника від International Science Group. Будемо раді співпраці!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndexingMonographsContent;