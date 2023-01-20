import React, {FC, useEffect} from 'react';
import "./registrationPage.css"
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {store} from "../store";
import ErrorComponent from "../componens/Error-component/ErrorComponent";
import {useNavigate} from "react-router-dom";
const RegistrationPage: FC = () => {
    const history = useNavigate()
    function redirect () {
        history("/account")
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const {userRegisterName,
        userRegisterLastName,
        userRegisterSurName,
        userRegisterEmail,
        userRegisterPassword,
        userRegisterRepeatPassword,
        userRegisterSubmit
    } = useActions()
    const {
        name,
        surName,
        lastName,
        email,
        password,
        repeat_password,
        error
    } = useTypedSelector(store => {
        return  store.user.userRegistrationData
    })
    const userData = useTypedSelector(store => {
        return store.user.userRegistrationData
    })
    return (
        <div className={"registration-page"} >
            {error ? <ErrorComponent message={error}/> : null}
            <div className="container">
                <form  className={"registration-form"} >
                    <div className="row">
                        <div className="registration-box">
                            <div className={"row row-registration-box"} >
                                <div className="registration-box-title">
                                    Реїстрація
                                </div>
                                <input type="text" value={name} onChange={(event)=> {
                                    userRegisterName(event)
                                }
                                } className={"input-registration-box input-registration-box-name"} alt={"Name"} placeholder="Ім'я"/>
                                <input type="text" value={lastName} onChange={(event)=> {
                                    userRegisterLastName(event)
                                }
                                } className={"input-registration-box"} alt={"lastName"} placeholder="Прізвище"/>
                                <input type="text" value={surName} onChange={(event)=> {
                                    userRegisterSurName(event)
                                }
                                } className={"input-registration-box"} alt={"surName"} placeholder="По-батькові"/>
                                <input type="text" value={email} onChange={(event) => {
                                    userRegisterEmail(event)
                                }} className={"input-registration-box"} alt={"Email"} placeholder="Пошта"/>
                                <input type="password" value={password}  onChange={(event)=> {
                                    userRegisterPassword(event)
                                }} className={"input-registration-box"} alt={"Password"} placeholder="Пароль"/>
                                <input type="password" value={repeat_password} onChange={(event)=> {
                                    userRegisterRepeatPassword(event)
                                }} className={"input-registration-box"} alt={"repeat_password"} placeholder="Повторіть пароль"/>
                                <div className="remember-me-forgot-password-registration-box row">
                                </div>
                                <div className="login-registration-box row row-login-registration-box">
                                    <button type={"submit"} onClick={(event) => {
                                        userRegisterSubmit(event, userData,  redirect)
                                    } } className={"login-registration-box-button"} >Реїстрація </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;