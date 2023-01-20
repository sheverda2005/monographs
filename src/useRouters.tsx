import {Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import СonferencesPage from "./pages/СonferencesPage";
import MonographsPage from "./pages/MonographsPage";
import ManualsPage from "./pages/ManualsPage";
import MagazinesPage from "./pages/MagazinesPage";
import InternshipPage from "./pages/InternshipPage";
import PaymentPage from "./pages/PaymentPage";
import ContactsPage from "./pages/ContactsPage";
import AuthorizationPage from "./pages/AuthorizationPage";
import RegistrationPage from "./pages/RegistrationPage";
import AccountPage from "./pages/AccountPage";
import Spinner from "./componens/Spinner/Spinner";


export function useRouters(isAuth: boolean, loading: boolean) {
    if (loading) {
        return <Spinner/>
    }
   if (isAuth) {
       return (
           <Routes>
               <Route path={"/"} element={<MainPage/>} />
               <Route path={"/conferences"} element={<СonferencesPage/>} />
               <Route path={"/monographs"} element={<MonographsPage/>} />
               <Route path={"/manuals"} element={<ManualsPage/>} />
               <Route path={"/magazines"} element={<MagazinesPage/>} />
               <Route path={"/internship"} element={<InternshipPage/>} />
               <Route path={"/payment"} element={<PaymentPage/>} />
               <Route path={"/contacts"} element={<ContactsPage/>} />
               <Route path={"/account"} element={<AccountPage/>} />
               <Route path={"*"} element={<Navigate to={"/"} />} />
           </Routes>
       )
   } else {
       return (
           <Routes>
               <Route path={"/"} element={<MainPage/>} />
               <Route path={"/conferences"} element={<СonferencesPage/>} />
               <Route path={"/monographs"} element={<MonographsPage/>} />
               <Route path={"/manuals"} element={<ManualsPage/>} />
               <Route path={"/magazines"} element={<MagazinesPage/>} />
               <Route path={"/internship"} element={<InternshipPage/>} />
               <Route path={"/payment"} element={<PaymentPage/>} />
               <Route path={"/contacts"} element={<ContactsPage/>} />
               <Route path={"/authorization"} element={<AuthorizationPage/>} />
               <Route path={"/registration"} element={<RegistrationPage/>} />
               <Route path={"*"} element={<Navigate to={"/"} />} />
           </Routes>
       )
   }
}