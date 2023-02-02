import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import {IConferencesPageTablesData} from "./ConferencesPageTablesData";
import "./scheduledConferencesPageContant.css"

interface IConferencesPageTable {
    table: IConferencesPageTablesData
}
const ConferencesPageTable: FC<IConferencesPageTable> = ({table}) => {
    return (
        <div className={"conferences-page-table"}>
            <div className="row row-conferences-page-table">
                <div className="conferences-page-table-information">
                    <div className="row row-conferences-page-table-information">
                        <div className=" conferences-page-table-item conferences-page-table-place">
                           <div className="row row-conferences-page-table-place">
                               <img src="/images/address-img.png" className={"conferences-page-table-place-img"} alt="address" height={"20px"}/>
                               <div className="conferences-page-table-place-information">
                                   {table.place}
                               </div>
                           </div>
                        </div>
                        <div className=" conferences-page-table-item conferences-page-table-data">
                            {table.data}
                        </div>
                        <div className="conferences-page-table-item conferences-page-table-receptionOfmaterials">
                            {table.receptionOfmaterials}
                        </div>
                        <div className=" conferences-page-table-item conferences-page-table-price">
                            <b>{table.price}</b>
                        </div>
                    </div>
                </div>
                <div className=" conferences-page-table-item conferences-page-table-link">
                    <a href={table.link} >{table.link}</a>
                </div>
            </div>
        </div>
    );
};

export default ConferencesPageTable;