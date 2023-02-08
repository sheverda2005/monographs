import React, {FC} from 'react';
import "./plannedMonographName.css"

interface IPlannedMonographName {
    name: string
}
const PlannedMonographName: FC<IPlannedMonographName> = ({name}) => {
    return (
        <div className={"planned-monograph-name"}>
            <a className={"planned-monograph-name-link"} href="/">{name}</a>
        </div>
    );
};

export default PlannedMonographName;