import React, {FC} from 'react';
import WhatWeDoBox from "./WhatWeDoBox";
import "./whatWeDoBoxes.css"
import {boxes} from "./data/dataForWhatWeDoBox";
const WhatWeDoBoxes: FC = () => {
    return (
        <div className={"whatWeDoBoxes"}>
            <div className="row row-whatWeDoBoxes">
                {boxes.map(box => {
                   return  <WhatWeDoBox title={box.title} text={box.text} />
                })}
            </div>
        </div>
    );
};

export default WhatWeDoBoxes;