import React from 'react';
import "./dataForWorkWithUs/data"
import {data} from "./dataForWorkWithUs/data";
import WorkWithUsBox from "./WorkWithUsBox";
import "./workWithUsBoxes.css"


const WorkWithUsBoxes = () => {
    return (
        <div className={"work-with-us-boxes"}>
            <div className="row row-work-with-us-boxes">
                {data.map(box => {
                    return <WorkWithUsBox img={box.img} text={box.text}/>
                })}
            </div>
        </div>
    );
};

export default WorkWithUsBoxes;