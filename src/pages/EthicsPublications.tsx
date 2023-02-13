import PageHeader from "../componens/Page-header/PageHeader";
import CustomPath from "../componens/Custom-path/CustomPath";
import "./ethicsPublications.css"
import EthicsPublicationsContent from "../componens/EthicsPublications-componens/EthicsPublicationsContent";
const EthicsPublications = () => {
    return (
        <div className={"ethics-publications"} >
            <PageHeader title={"Етика публікацій"}/>
            <CustomPath currentPage={"Етика публікацій"}/>
            <EthicsPublicationsContent/>
        </div>
    );
};

export default EthicsPublications;