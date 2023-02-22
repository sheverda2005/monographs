import React, {useEffect} from 'react';
import PageHeader from "../componens/Page-header/PageHeader";
import CustomPath from "../componens/Custom-path/CustomPath";
import "./editorialBoardPage.css"
import EditorialboardContent from "../componens/EditorialboardPage-componens/EditorialboardContent";
const EditorialboardPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={"editorial-board-page"} >
          <PageHeader title={"Редакційна колегія"}/>
          <CustomPath currentPage={"Редакційна колегія"}/>
          <EditorialboardContent/>
        </div>
    );
};

export default EditorialboardPage;