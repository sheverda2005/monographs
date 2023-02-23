import React from 'react';
import PageHeader from "../componens/Page-header/PageHeader";
import CustomPath from "../componens/Custom-path/CustomPath";
import "./reviewersPage.css"
import ReviewersContent from "../componens/ReviewersPage-componens/ReviewersContent";
const ReviewersPage = () => {
    return (
        <div className={"reviewers-page"} >
            <PageHeader title={'Рецензенти'}/>
            <CustomPath currentPage={"Рецензенти"}/>
            <ReviewersContent/>
        </div>
    );
};

export default ReviewersPage;