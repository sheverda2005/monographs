import {FC, useEffect} from "react";
import "./authorizationPage.css"
import {Link} from "react-router-dom";
const AuthorizationPage: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={"authorization-page"} >
            <div className="container">
                <div className="row">
                   <div className="authorization-box">
                       <div className={"row row-authorization-box"} >
                           <div className="authorization-box-title">
                               Вхід у ваш аккаунт
                           </div>
                           <input type="text" className={"input-authorization-box input-authorization-box-email"} alt={"Email"} placeholder="Пошта"/>
                           <input type="password" className={"input-authorization-box"} alt={"Password"} placeholder="Пароль"/>
                           <div className="remember-me-forgot-password-authorization-box row">
                               <div className="remember-me row row-remember-me">
                                   <input type="checkbox" className={"remember-me-checkbox"}/>
                                   <label htmlFor={"remember-me-checkbox"} className={"remember-me-label"}>Зам'ятати мене</label>
                               </div>
                               <div className="forgot-password">
                                   <Link className={"link-forgot-password"} to={"/"}>Забули пароль?</Link>
                               </div>
                           </div>
                           <div className="login-authorization-box row row-login-authorization-box">
                               <button className={"login-authorization-box-button"} >Увійти</button>
                               <p className={"authorization-box-to-register"}>
                                   Немаєте аккаунта?
                                   <Link className={"link-to-register"} to={"/registration"} >Зареєструватися</Link>
                               </p>
                           </div>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorizationPage;