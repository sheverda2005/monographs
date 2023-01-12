import React, {FC} from 'react';
import "./whatWeDoBox.css"

export interface WhatWeDoBoxI {
    title: string,
    text: string
}

const WhatWeDoBox: FC<WhatWeDoBoxI> = ({title, text}) => {
    return (
        <div className={"whatWeDoBox"} >
            <div className="row row-whatWeDoBox">
                <div className="box-title">
                    {title}
                </div>
                <div className="box-text">
                    {text}
                </div>
            </div>
        </div>
    );
};

export default WhatWeDoBox;