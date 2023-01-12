import React, {FC} from 'react';
import "./whatWeDo.css"
import WhatWeDoBox from "./WhatWeDoBox";
import WhatWeDoBoxes from './WhatWeDoBoxes';
const WhatWeDo:FC = () => {
    return (
        <div className={"whatWeDo"} >
            <div className="container">
                <div className="row row-whatWeDo">
                    <div className="barge barge-whatWeDo">Наш сервіс</div>
                    <h3 className="whatWeDo-title">Що ми робимо</h3>
                    <WhatWeDoBoxes />
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;