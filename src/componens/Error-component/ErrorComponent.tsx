import React, {FC} from 'react';
import "./error-component.css"
interface IErrorComponent {
    message: string
}
const ErrorComponent: FC<IErrorComponent> = ({message}) => {
    return (
        <div className={"error-component"} >
            {message}
        </div>
    );
};

export default ErrorComponent;