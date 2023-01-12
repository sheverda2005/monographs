import  { FC } from 'react';
import "./custom-path.css"
import {Link} from "react-router-dom";

interface ICustomPath {
    currentPage: string
}
const CustomPath: FC<ICustomPath> = ({currentPage}) => {
    return (
        <div className={"custom-path-component"}>
            <div className={"custom-path"}>
                <ul className={"custom-path-items row"}>
                    <li className={"custom-path-item custom-path-item-main"}>
                        <Link className="main-link-custom-path" to={"/"}>Головна</Link>
                    </li>
                    <li className={"custom-path-item slash-line-custom-path"}>
                        <p>/</p>
                    </li>
                    <li className={"custom-path-item"}>
                        <p className={"current-page-custom-path"}>{currentPage}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CustomPath;