import React, {FC, useEffect} from 'react';
import PageHeader from "../componens/Page-header/PageHeader";
import CustomPath from "../componens/Custom-path/CustomPath";
import ContactUs from "../componens/ContactsPage-componens/Contact-us/ContactUs";
import "./contactsPage.css"
const ContactsPage: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={"contacts-page"}>
            <PageHeader title={"Наші контакти"} />
            <CustomPath currentPage={"Контакти"}/>
            <ContactUs/>
        </div>
    );
};

export default ContactsPage;