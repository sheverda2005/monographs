import React, {FC} from 'react';
import "./pageHeader.css"

interface IPageHeader {
    title: string
}
const PageHeader:FC<IPageHeader> = ({title}) => {
    return (
        <div className={"header-page row row-header-page"} >
            <h1 className="header-page-title">
                {title}
            </h1>
        </div>
    );
};

export default PageHeader;