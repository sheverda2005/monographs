import React, {useEffect} from 'react';
import PageHeader from "../componens/Page-header/PageHeader";
import CustomPath from "../componens/Custom-path/CustomPath";
import "./scheduledconferencesPage.css"
import ScheduledConferencesPageContant
    from "../componens/ScheduledConferencesPage-componens/ScheduledConferencesPageContant";
const ScheduledConferencesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={"scheduled-conferences-page"} >
            <PageHeader title={"Заплановані конференції"}/>
            <CustomPath currentPage={"Заплановані конференції"}/>
            <ScheduledConferencesPageContant/>
        </div>
    );
};

export default ScheduledConferencesPage;