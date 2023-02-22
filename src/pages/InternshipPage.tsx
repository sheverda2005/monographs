import React, {useEffect} from 'react';
import "./internshipPage.css"
import PageHeader from "../componens/Page-header/PageHeader";
import CustomPath from "../componens/Custom-path/CustomPath";
const InternshipPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={"internship-page"} >
            <PageHeader title={"Стажування в ЄС"}/>
            <CustomPath currentPage={"Ставжування в ЄС"}/>
        </div>
    );
};

export default InternshipPage;