import React, {FC, useEffect} from 'react';
import PageHeader from "../componens/Page-header/PageHeader";
import "./conferencesPage.css"
import CustomPath from "../componens/Custom-path/CustomPath";
import СonferencesPageContent from "../componens/СonferencesPage-componens/СonferencesPageContent";
const СonferencesPage: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={"conferences-page"} >
            <PageHeader title={"Конференції"}/>
            <CustomPath currentPage={"Конференції"}/>
            <СonferencesPageContent/>
        </div>
    );
};

export default СonferencesPage;