import {FC, useEffect} from "react";
import PageHeader from "../componens/Page-header/PageHeader";
import CustomPath from "../componens/Custom-path/CustomPath";
import "./indexingMonographsPage.css"
import IndexingMonographsContent from "../componens/IndexingMonographs-componens/IndexingMonographsContent";
const IndexingMonographsPage: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={"indexing-monographs-page"} >
            <PageHeader title={"Індексація монографій"}/>
            <CustomPath currentPage={"Індексація монографій"}/>
            <IndexingMonographsContent/>
        </div>
    );
};

export default IndexingMonographsPage;