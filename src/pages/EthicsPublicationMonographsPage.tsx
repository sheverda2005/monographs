import React, {FC} from 'react';
import PageHeader from "../componens/Page-header/PageHeader";
import CustomPath from "../componens/Custom-path/CustomPath";
import "./ethicsPublicationMonographsPage.css"
import EthicsPublicationMonographsContent
    from "../componens/EthicsPublicationMonographs-componens/EthicsPublicationMonographsContent";
const EthicsPublicationMonographsPage: FC = () => {
    return (
        <div className={'ethics-publication-monographs-page'} >
            <PageHeader title={"Етика публікацій"}/>
            <CustomPath currentPage={"Етика публікацій"}/>
            <EthicsPublicationMonographsContent/>
        </div>
    );
};

export default EthicsPublicationMonographsPage;