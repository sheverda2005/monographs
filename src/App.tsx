import React, {useEffect} from 'react';
import NavBar from "./componens/NavBar/NavBar";
import {useActions} from "./hooks/useActions";
import {BrowserRouter} from "react-router-dom";
import {useRouters} from "./useRouters";
import Footer from "./componens/Footer/Footer";
import {useTypedSelector} from "./hooks/useTypedSelector";
const App = () => {
    const {scrollY, checkUser} = useActions()
    const {isAuth} = useTypedSelector(state => state.user.userData)
    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            scrollY(window.pageYOffset)
        })
        checkUser()
    }, [])
    return (
            <BrowserRouter>
                <NavBar/>
                {useRouters(isAuth)}
                <Footer/>
            </BrowserRouter>
    );
};

export default App;