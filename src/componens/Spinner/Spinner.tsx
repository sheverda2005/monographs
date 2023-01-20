import React from 'react';
import "./spinner-loading.css"
const Spinner = () => {
    return (
        <div className={"spinner-loading"} >
            <div className="spinner-loading-content">
                <span className="loader"></span>
            </div>
        </div>
    );
};

export default Spinner;