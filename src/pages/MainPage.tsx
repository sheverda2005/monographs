import React, {FC, useEffect} from 'react';
import "./MainPage.css"
import PageHeaderParallax from "../componens/MainPage-componens/PageHeader/PageHeaderParallax";
import AboutOrganization from "../componens/MainPage-componens/AboutOrganization/AboutOrganization";
import WhatWeDo from "../componens/MainPage-componens/WhatWeDo/WhatWeDo";
import WhyUs from "../componens/MainPage-componens/WhyUs/WhyUs";
import WorkWithUs from "../componens/MainPage-componens/WorkWithUs/WorkWithUs";
const MainPage: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={"main-page"}>
            <PageHeaderParallax/>
            <WhatWeDo/>
            <AboutOrganization/>
            <WhyUs/>
            <WorkWithUs/>
        </div>
    );
};

export default MainPage;