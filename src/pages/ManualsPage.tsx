import React, {useEffect} from 'react';
import PageHeader from "../componens/Page-header/PageHeader";
import CustomPath from "../componens/Custom-path/CustomPath";
import "./manualsPage.css"
const ManualsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={"manuals-page"} >
            <PageHeader title={"Посібники"}/>
            <CustomPath currentPage={"Посібники"}/>
        </div>
    );
};

export default ManualsPage;