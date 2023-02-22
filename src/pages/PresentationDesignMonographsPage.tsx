import {FC, useEffect} from 'react';
import PageHeader from "../componens/Page-header/PageHeader";
import CustomPath from "../componens/Custom-path/CustomPath";
import "./presentationDesignMonographsPage.css"
import PresentationDesignMonographsContent
    from "../componens/PresentationDesignMonographs-componens/PresentationDesignMonographsContent";
const PresentationDesignMonographsPage:FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={"presentation-design-monographs-page"} >
            <PageHeader title={"Подання та оформленна"}/>
            <CustomPath currentPage={"Подання та оформлення"}/>
            <PresentationDesignMonographsContent/>
        </div>
    );
};

export default PresentationDesignMonographsPage;