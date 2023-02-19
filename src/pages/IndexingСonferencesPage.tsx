import React, {useEffect} from 'react';
import PageHeader from "../componens/Page-header/PageHeader";
import CustomPath from "../componens/Custom-path/CustomPath";
import "./indexingConferencesPage.css"
import IndexingConferencesContent from "../componens/IndexingConferencesPage-componens/IndexingConferencesContent";
const IndexingConferencesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={"indexing-conferences-page"} >
            <PageHeader title={"Індексація конференцій"}/>
            <CustomPath currentPage={"Індексація конференцій"}/>
            <IndexingConferencesContent/>
        </div>
    );
};

export default IndexingConferencesPage;