import React from 'react';
import "./submissionExecutionTheses.css"
import PageHeader from "../componens/Page-header/PageHeader";
import CustomPath from "../componens/Custom-path/CustomPath";
import SubmissionExecutionThesesContent
    from "../componens/SubmissionExecutionTheses-componens/SubmissionExecutionThesesContent";
const SubmissionExecutionTheses = () => {
    return (
        <div className={"submission-execution-theses"} >
            <PageHeader title={"Подання та оформлення тез"}/>
            <CustomPath currentPage={"Подання та оформлення тез"}/>
            <SubmissionExecutionThesesContent/>
        </div>
    );
};

export default SubmissionExecutionTheses;