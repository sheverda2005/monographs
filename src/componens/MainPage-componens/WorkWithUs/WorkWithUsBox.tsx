import React, {FC} from 'react';
import "./workWithUsBox.css"
import {DataFromWorkWithUsI} from "./dataForWorkWithUs/data";

const WorkWithUsBox: FC<DataFromWorkWithUsI> = ({img, text}) => {
    return (
        <div className={"work-with-us-box"}>
            <div className="row row-work-with-us-box">
                <img className={"work-with-us-box-img"} src={img} alt=""/>
                <div className="work-with-us-box-information">
                    <p className={"work-with-us-box-text"}>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default WorkWithUsBox;