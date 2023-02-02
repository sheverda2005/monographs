import React from 'react';
import PageHeader from "../componens/Page-header/PageHeader";
import CustomPath from "../componens/Custom-path/CustomPath";
import "./manualsPage.css"
const ManualsPage = () => {
    return (
        <div className={"manuals-page"} >
            <PageHeader title={"Посібники"}/>
            <CustomPath currentPage={"Посібники"}/>
        </div>
    );
};

export default ManualsPage;