import {FC} from "react"
import "./errorPage.css"

export const ErrorPage: FC = () => {
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