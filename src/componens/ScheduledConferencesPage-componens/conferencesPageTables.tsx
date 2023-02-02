import React, { FC } from 'react';
import {IConferencesPageTablesData} from "./ConferencesPageTablesData";
import ConferencesPageTable from "./conferencesPageTable";
import "./scheduledConferencesPageContant.css"
interface IConferencesPageTables {
    tables: IConferencesPageTablesData[]
}
const ConferencesPageTables: FC<IConferencesPageTables> = ({tables}) => {
    return (
        <div className={"conferences-page-tables"} >
            <div className="row row-conferences-page-tables">
                {tables.map(table => {
                    return <ConferencesPageTable table={table}/>
                })}
            </div>
        </div>
    );
};

export default ConferencesPageTables;