import React, {useEffect} from 'react';
import PageHeader from "../componens/Page-header/PageHeader";
import CustomPath from "../componens/Custom-path/CustomPath";
import "./monographsPage.css"
import MonographsPageContent from "../componens/MonographsPage-componens/MonographsPageContent";
const MonographsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={"monographs-page"} >
            <PageHeader title={"Монографії"}/>
            <CustomPath currentPage={"Монографії"}/>
            <MonographsPageContent/>
        </div>
    );
};

export default MonographsPage;