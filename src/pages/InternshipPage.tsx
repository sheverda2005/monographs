import React, {useEffect} from 'react';
import "./internshipPage.css"
import PageHeader from "../componens/Page-header/PageHeader";
import CustomPath from "../componens/Custom-path/CustomPath";
import InternshipContent from "../componens/InternshipPage-componens/InternshipContent";
const InternshipPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={"internship-page"} >
            <PageHeader title={"Стажування в ЄС"}/>
            <CustomPath currentPage={"Ставжування в ЄС"}/>
            <InternshipContent/>
        </div>
    );
};

export default InternshipPage;