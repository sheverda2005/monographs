import React from 'react';
import PageHeader from "../componens/Page-header/PageHeader";
import CustomPath from "../componens/Custom-path/CustomPath";
import "./editorialBoardPage.css"
import EditorialboardContent from "../componens/EditorialboardPage-componens/EditorialboardContent";
const EditorialboardPage = () => {
    return (
        <div className={"editorial-board-page"} >
          <PageHeader title={"Редакційна колегія"}/>
          <CustomPath currentPage={"Редакційна колегія"}/>
          <EditorialboardContent/>
        </div>
    );
};

export default EditorialboardPage;