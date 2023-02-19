import "./indexingConferencesContent.css"
const IndexingConferencesContent = () => {
    return (
        <div className={"indexing-conferences-content"}>
            <div className="container">
                <div className="row row-indexing-conferences-content">
                    <div className="indexing-conferences-images-links">
                        <div className="row row-indexing-conferences-images-links">
                            <a className={"indexing-conferences-images-links-link"} href="https://www.doi.org/">
                                <img className={"indexing-conferences-images-links-img"} src="/images/indexing-conferences/DOI_logo.svg_.png.jpg" alt="DOI_logo"/>
                            </a>
                            <a className={"indexing-conferences-images-links-link"} href="https://scholar.google.com.ua/scholar?hl=uk&as_sdt=0,5&q=%22International+Science+Group%22&scisbd=1">
                                <img className={"indexing-conferences-images-links-img"} src="/images/indexing-conferences/kisspng-google-search-google-analytics-marketing-business-google-scholar-logo-5b4c8647e1f404.7173265615317417679255.jpg"  alt="Google"/>
                            </a>
                            <a className={"indexing-conferences-images-links-link"} href="https://search.crossref.org/?q=International+Scientific+and+Practical+Conference&publisher-name=International+Science+Group&from_ui=yes">
                                <img className={"indexing-conferences-images-links-img"} src="/images/indexing-conferences/Crossref_Logo_Stacked_RGB_SMALL.png.jpg" alt="Crossref"/>
                            </a>
                            <a className={"indexing-conferences-images-links-link"} href="https://www.bookwire.com/books/author/International-Science-Group/Books-By?authorId=76314106">
                                <img className={"indexing-conferences-images-links-img"} src="/images/indexing-conferences/logo_bookwire.jpg"  alt="Bookwire"/>
                            </a>
                            <a className={"indexing-conferences-images-links-link"} href="https://ouci.dntb.gov.ua/?title=&publisher=International+Science+Group&pub_type=proceedings">
                                <img className={"indexing-conferences-images-links-img"} src="/images/indexing-conferences/OUCI.png"  alt="OUCI"/>
                            </a>
                        </div>
                    </div>
                    <div className="indexing-conferences-content-text">
                        Роботи будуть проіндексовані в <a className={"indexing-conferences-content-text-link"} href="https://www.doi.org/">DOI</a>  і <a className={"indexing-conferences-content-text-link"} href="https://search.crossref.org/?q=International+Scientific+and+Practical+Conference&publisher-name=International+Science+Group&from_ui=yes">Crossref</a>. Кожен збірник міжнародної наукової конференції також додається в пошукову систему і базу даних наукових цитувань - <a className={"indexing-conferences-content-text-link"} href="https://ouci.dntb.gov.ua/">Open Ukrainian Citation Index (OUCI)</a>. У свою чергу база <a className={"indexing-conferences-content-text-link"} href="https://ouci.dntb.gov.ua/">OUCI</a> містить метадані наукових видань, через які дуже зручно шукати наукову літературу і знаходити цитатні зв'язки між науковими роботами.
                        <div>
                            Вибірково роботи індексуються в <a className={"indexing-conferences-content-text-link"} href="https://scholar.google.com.ua/scholar?hl=uk&as_sdt=0%2C5&q=%22International+Science+Group%22&btnG=">Google Scholar</a>, часто не індексація робіт залежить від персональних налаштувань Вашого профілю. Час індексації в <a className={"indexing-conferences-content-text-link"} href="https://scholar.google.com.ua/scholar?hl=uk&as_sdt=0%2C5&q=%22International+Science+Group%22&btnG=">Google Scholar</a> до п'яти місяців. Ви можете прискорити й гарантувати індексацію Ваших робіт в Google Scholar розмістивши їх в репозиторії свого навчального закладу.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndexingConferencesContent;