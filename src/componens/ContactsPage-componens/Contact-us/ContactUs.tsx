import React, {FC} from 'react';
import "./contact-us.css"
const ContactUs: FC = () => {
    return (
        <div className={"contact-us"}>
            <div className="container">
                <div className="row row-contact-us">
                    <h1 className="contact-us-title">
                        Зв'язатися з нами
                    </h1>
                    <div className="all-information-about-our-contacts row row-all-information-about-our-contacts">
                        <div className="numbers-all-information">
                            <h3 className="all-information-title">
                                Телефони
                            </h3>
                            <div className="numbers-information">
                                <ul className={"numbers-information-items row row-numbers-information-items"}>
                                    <li className={"numbers-information-item row-information-item"}>
                                        <img src="/images/number-img.png" alt="phone" className={"information-item-img"}/>
                                        <p className={"current-information-item"}>
                                            +38 050 555 69 50
                                        </p>
                                    </li>
                                    <li className={"numbers-information-item row-information-item"} >
                                        <img src="/images/number-img.png" alt="phone" className={"information-item-img"}/>
                                        <p className={"current-information-item"}>
                                            +38 050 555 69 50
                                        </p>
                                    </li>
                                    <li className={"numbers-information-item row-information-item"} >
                                        <img src="/images/number-img.png" alt="phone" className={"information-item-img"}/>
                                        <p className={"current-information-item"}>
                                            +38 050 555 69 50
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="address-all-information">
                            <h3 className={"all-information-title"}>
                                Адреса
                            </h3>
                            <div className="address-information">
                                <ul className={"address-information-items"}>
                                    <li className={"address-information-item row-information-item"}>
                                        <img src="/images/address-img.png" alt="address" className={"information-item-img"} />
                                        <p className={"current-information-item"}>буд. 7, вул. Меліоративна, с. Зелене, Вараський район</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="email-all-information">
                            <h3 className={"all-information-title"} >
                                Пошта
                            </h3>
                            <div className="email-information">
                                <ul className={"email-information-items"}>
                                    <li className={"email-information-item row-information-item"}>
                                        <img src="/images/email-img.png" alt="email" className={"information-item-img"} />
                                        <p className={"current-information-item"}>nazarsheverda@gmail.com</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;