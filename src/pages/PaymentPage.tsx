import React, {useEffect} from 'react';
import PageHeader from "../componens/Page-header/PageHeader";
import CustomPath from "../componens/Custom-path/CustomPath";
import "./paymentPage.css"
import PaymentData from "../componens/Payment-page-componens/PaymentData";
const PaymentPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={"payment-page"}>
            <PageHeader title={"Оплата за послуги"}/>
            <CustomPath currentPage={"Оплата"}/>
            <PaymentData/>
        </div>
    );
};

export default PaymentPage;