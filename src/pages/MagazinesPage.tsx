import React, { FC } from 'react';
import PageHeader from "../componens/Page-header/PageHeader";
import CustomPath from "../componens/Custom-path/CustomPath";
import "./magazinesPage.css"
const MagazinesPage: FC = () => {
    return (
        <div  className={"magazines-page"} >
                <PageHeader title={"Журнали"}/>
                <CustomPath currentPage={"Журнали"}/>
        </div>
    );
};

export default MagazinesPage;