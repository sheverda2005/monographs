import {FC, useEffect} from "react";
import "./account-page.css"
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
const AccountPage: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const {name, lastName, surName} = useTypedSelector(state => state.user.userData)
    const {logout} = useActions()
    return (
        <div className={"account-page"}>
           <div className="container">
               <div className="row">
                   <div className="account-information row">
                       <h1 className={"account-page-title"} >{name}</h1>
                       <h1 className={"account-page-title"} >{lastName}</h1>
                       <h1 className={"account-page-title"} >{surName}</h1>
                       <button onClick={()=> {
                           logout()
                       }}
                       className={"logout-button"} > Вийти з акаунту</button>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default AccountPage;