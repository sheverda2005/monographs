import React, {FC, useEffect} from 'react';
import "./registrationPage.css"
const RegistrationPage: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={"registration-page"} >
            <div className="container">
                <div className="row">
                    <div className="registration-box">
                        <div className={"row row-registration-box"} >
                            <div className="registration-box-title">
                                Реїстрація
                            </div>
                            <input type="text" className={"input-registration-box input-registration-box-name"} alt={"Name"} placeholder="Ім'я"/>
                            <input type="text" className={"input-registration-box"} alt={"lastName"} placeholder="Прізвище"/>
                            <input type="text" className={"input-registration-box"} alt={"surName"} placeholder="По-батькові"/>
                            <input type="text" className={"input-registration-box"} alt={"Email"} placeholder="Пошта"/>
                            <input type="password" className={"input-registration-box"} alt={"Password"} placeholder="Пароль"/>
                            <input type="password" className={"input-registration-box"} alt={"repeat_password"} placeholder="Повторіть пароль"/>
                            <div className="remember-me-forgot-password-registration-box row">
                            </div>
                            <div className="login-registration-box row row-login-registration-box">
                                <button className={"login-registration-box-button"} >Реїстрація </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;