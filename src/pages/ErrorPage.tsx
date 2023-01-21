import {FC, useEffect} from "react"
import "./errorPage.css"

export const ErrorPage: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
           <div className={"error-page"} >
               <div className={"container"} >
                   <div className={"row row-error-page"} >
                       <h1 className={"error-page-title"} >Сторінка не знайдена</h1>
                   </div>
               </div>
           </div>
    )
}

export default  ErrorPage;