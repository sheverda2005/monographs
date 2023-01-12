import React, {useEffect} from 'react';
import NavBar from "./componens/NavBar/NavBar";
import {useActions} from "./hooks/useActions";
import {BrowserRouter} from "react-router-dom";
import {useRouters} from "./useRouters";
import Footer from "./componens/Footer/Footer";
const App = () => {
    const {scrollY} = useActions()
    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            scrollY(window.pageYOffset)
        })
    }, [])
    return (
            <BrowserRouter>
                <NavBar/>
                {useRouters()}
                <Footer/>
            </BrowserRouter>
    );
};

export default App;