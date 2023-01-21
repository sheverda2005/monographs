import React, {useEffect} from 'react';
import "./spinner-loading.css"
const Spinner = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={"spinner-loading"} >
            <div className="spinner-loading-content">
                <span className="loader"></span>
            </div>
        </div>
    );
};

export default Spinner;