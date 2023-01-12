import {FC} from "react";
import "./footer.css"
import {Link, NavLink} from "react-router-dom";
const Footer: FC = () => {
    return (
        <div className={"footer"}>
            <div className="container">
                <div className="row footer-row">
                    <div className="aboutOrganization-footer row row-aboutOrganization-footer">
                        <img src="/images/logo_2.png" alt="Logo" className="aboutOrganization-title-footer" />
                        <div className="aboutOrganization-text-footer">
                            Громадська організація «МІЖНАРОДНА ФУНДАЦІЯ НАУКОВЦІВ ТА ОСВІТЯН» (ГО "МФНО", INTERNATIONAL EDUCATORS AND SCHOLARS FOUNDATION, IESF) є добровільним об'єднанням фізичних осіб, створеним для об’єднання наукового та освітянського потенціалу України для розвитку міжнародної наукової трансінтеграції.
                        </div>
                    </div>
                    <div className="links-footer">
                        <div className="title-links-footer">
                            Посилання
                        </div>
                        <ul className={"links-footer-list row row-links-footer-list"}>
                            <li className={"link-footer-item"} >
                                <NavLink className={"link-footer"} to={"/"}>Головна</NavLink>
                            </li>
                            <li className={"link-footer-item"} >
                                <Link className={"link-footer"} to={"/conferences"}>Конференції</Link>
                            </li>
                            <li className={"link-footer-item"} >
                                <Link className={"link-footer"} to={"/monographs"}>Монографії</Link>
                            </li>
                            <li className={"link-footer-item"}  >
                                <Link className={"link-footer"} to={"/manuals"}>Посібники</Link>
                            </li>
                            <li className={"link-footer-item"}>
                                <Link className={"link-footer"} to={"/magazines"}>Журнали</Link>
                            </li>
                            <li className={"link-footer-item"}  >
                                <Link className={"link-footer"} to={"/internship"}>Стажування в ЄС</Link>
                            </li>
                            <li className={"link-footer-item"} >
                                <Link className={"link-footer"} to={"/payment"}>Оплата</Link>
                            </li>
                            <li className={"link-footer-item"} >
                                <Link className={"link-footer"} to={"/contacts"}>Контаки</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="contacts-footer">
                        <div className="contacts-title-footer">
                            Контакти
                        </div>
                        <ul className={"contacts-footer"} >
                            <li className={"contact-footer"} >
                                nazarsheverda@gmail.com
                            </li>
                            <li className={"contact-footer"} >
                                +38-068-73-66-55-7
                            </li>
                        </ul>
                        <div className="contacts-footer-images row row-contacts-footer-images">
                            <a href="https://www.instagram.com/nazar_sheverda">
                                <img src="/images/instagram.png" className={"contacts-footer-image"} />
                            </a>
                            <a href="https://www.facebook.com/">
                                <img src="/images/facebook.png" className={"contacts-footer-image"} />
                            </a>
                            <a href="https://web.telegram.org/">
                                <img src="/images/telegram.png" className={"contacts-footer-image"} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;