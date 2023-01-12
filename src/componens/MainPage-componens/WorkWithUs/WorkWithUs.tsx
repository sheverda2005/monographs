import React from 'react';
import "./workWithUs.css"
import WorkWithUsBox from "./WorkWithUsBox";
import WorkWithUsBoxes from "./WorkWithUsBoxes";

const WorkWithUs = () => {
    return (
        <div className={"work-with-us"}>
            <div className="container">
                <div className="row row-work-with-us">
                    <div className="barge barge-work-with-us">Співпраця з нами</div>
                    <div className="title-work-with-us">Алгоритм співпраці з нами покроково</div>
                    <WorkWithUsBoxes/>
                </div>
            </div>
        </div>
    );
};

export default WorkWithUs;