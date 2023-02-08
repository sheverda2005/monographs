import React, {useEffect} from 'react';
import PageHeader from "../componens/Page-header/PageHeader";
import CustomPath from "../componens/Custom-path/CustomPath";
import "./plannedMonographs.css"
import PlannedMonographsContent from "../componens/PlannedMonographsPage-componens/PlannedMonographsContent";
const PlannedMonographsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={"planned-monographs-page"} >
            <PageHeader title={"Заплановані могоргафії"}/>
            <CustomPath currentPage={"Заплановані монографії"}/>
            <PlannedMonographsContent/>
        </div>
    );
};

export default PlannedMonographsPage;