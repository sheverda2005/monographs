import PageHeader from "../componens/Page-header/PageHeader";
import CustomPath from "../componens/Custom-path/CustomPath";
import "./ethicsPublications.css"
import EthicsPublicationsContent from "../componens/EthicsPublications-componens/EthicsPublicationsContent";
import {useEffect} from "react";
const EthicsPublications = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={"ethics-publications"} >
            <PageHeader title={"Етика публікацій"}/>
            <CustomPath currentPage={"Етика публікацій"}/>
            <EthicsPublicationsContent/>
        </div>
    );
};

export default EthicsPublications;