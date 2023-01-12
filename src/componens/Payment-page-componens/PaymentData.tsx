import React, { useEffect } from 'react';
import "./payment-data.css"
const PaymentData = () => {

    return (
        <div className={"payment-data"} >
            <div className="container">
                <div className="row row-payment-data">
                    <h1 className="payment-data-title">
                        Розмір організаційного внеску
                    </h1>
                    <ul className={"amounts-of-contributions-items"}>
                        <li className={"amounts-of-contributions-item"}>
                           <b>Для конференцій</b> оргвнесок складає <b><span className={"price"}>300 грн.</span></b> за кожну подану тезу (незалежно від кількості авторів або сторінок).
                        </li>
                        <li className={"amounts-of-contributions-item"}>
                            <b>Для монографій</b> складає <b><span className={"price"}>70 грн.</span></b> за одну сторінку представленого матеріалу.
                        </li>
                    </ul>
                    <div className="transfer-funds-online">
                        <div className="row row-transfer-funds-online">
                            <h2 className="transfer-funds-online-title">
                                Переказ оргвнесків можна зробити онлайн
                            </h2>
                            <div className="payment-privat24">
                                <div className="row row-payment-privat24">
                                    <button className="payment-privat24-button">
                                        <span className={"payment-privat24-button-text"}>Оплатити приват</span>
                                        <img src="/images/privat_24_logo.png" alt="privat-logo" className={"privat-logo"}/>
                                    </button>
                                    <div className="qr_image">
                                        <img src="/images/QR_privat_24.jpg" alt="QR-privat-24" className={"qr_image-img"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentData;