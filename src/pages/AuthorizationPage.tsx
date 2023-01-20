import {FC, useEffect} from "react";
import "./authorizationPage.css"
import {Link, useNavigate} from "react-router-dom";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
const AuthorizationPage: FC = () => {
    const history = useNavigate()
    function redirect () {
        history("/account")
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const {emailLogin, passwordLogin, rememberMe, login_Submit} = useActions()
    const {email, password, remember_me} = useTypedSelector(state => state.user.loginUser)
    return (
        <div className={"authorization-page"} >
            <div className="container">
                <form className={"login-form"}>
                    <div className="row">
                        <div className="authorization-box">
                            <div className={"row row-authorization-box"} >
                                <div className="authorization-box-title">
                                    Вхід у ваш аккаунт
                                </div>
                                <input type="text" value={email} onChange={(event) => {
                                    emailLogin(event)
                                } }  className={"input-authorization-box input-authorization-box-email"} alt={"Email"} placeholder="Пошта"/>
                                <input type="password" value={password} onChange={(event)=>  {
                                    passwordLogin(event)
                                }
                                } className={"input-authorization-box"} alt={"Password"} placeholder="Пароль"/>
                                <div className="remember-me-forgot-password-authorization-box row">
                                    <div  className="remember-me row row-remember-me">
                                        <input checked={remember_me} onChange={() => {
                                            rememberMe()
                                        } } type="checkbox" className={"remember-me-checkbox"}/>
                                        <label htmlFor={"remember-me-checkbox"} onClick={()=> {
                                            rememberMe()
                                        } } className={"remember-me-label"}>Зам'ятати мене</label>
                                    </div>
                                    <div className="forgot-password">
                                        <Link className={"link-forgot-password"} to={"/"}>Забули пароль?</Link>
                                    </div>
                                </div>
                                <div className="login-authorization-box row row-login-authorization-box">
                                    <button type="submit" onClick={(event)=> {
                                        login_Submit(event, email, password, remember_me, redirect)
                                    } } className={"login-authorization-box-button"} >Увійти</button>
                                    <p className={"authorization-box-to-register"}>
                                        Немаєте аккаунта?
                                        <Link className={"link-to-register"} to={"/registration"} >Зареєструватися</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
            </form>
            </div>
        </div>
    );
};

export default AuthorizationPage;