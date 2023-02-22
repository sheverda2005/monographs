import React, {FC, useEffect} from 'react';
import PageHeader from "../componens/Page-header/PageHeader";
import CustomPath from "../componens/Custom-path/CustomPath";
import "./literatureAalysisPage.css"
import LiteratureAnalysisContent from "../componens/LiteratureAnalysisPage-componens/LiteratureAnalysisContent";
const LiteratureAnalysisPage:FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={"literature-analysis-page"}>
            <PageHeader title={"Аналіз літератури"}/>
            <CustomPath currentPage={"Аналіз літератури"}/>
            <LiteratureAnalysisContent/>
        </div>
    );
};

export default LiteratureAnalysisPage;