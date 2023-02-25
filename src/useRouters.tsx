import {Navigate, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import СonferencesPage from "./pages/СonferencesPage";
import MonographsPage from "./pages/MonographsPage";
import ManualsPage from "./pages/ManualsPage";
import InternshipPage from "./pages/InternshipPage";
import PaymentPage from "./pages/PaymentPage";
import ContactsPage from "./pages/ContactsPage";
import AuthorizationPage from "./pages/AuthorizationPage";
import RegistrationPage from "./pages/RegistrationPage";
import AccountPage from "./pages/AccountPage";
import Spinner from "./componens/Spinner/Spinner";
import ErrorPage from "./pages/ErrorPage";
import ScheduledConferencesPage from "./pages/ScheduledConferencesPage";
import PlannedMonographsPage from "./pages/PlannedMonographsPage";
import SubmissionExecutionTheses from "./pages/SubmissionExecutionTheses";
import EthicsPublications from "./pages/EthicsPublications";
import IndexingConferencesPage from "./pages/IndexingСonferencesPage";
import EditorialboardPage from "./pages/EditorialboardPage";
import LiteratureAnalysisPage from "./pages/ LiteratureAnalysisPage";
import PresentationDesignMonographsPage from "./pages/PresentationDesignMonographsPage";
import ReviewersPage from "./pages/ReviewersPage";
import IndexingMonographsPage from "./pages/IndexingMonographsPage";
import EthicsPublicationMonographsPage from "./pages/EthicsPublicationMonographsPage";


export function useRouters(isAuth: boolean, loading: boolean) {
    if (loading) {
        return (
            <Routes>
                <Route path={"/"} element={<MainPage/>} />
                <Route path={"/conferences"} element={<СonferencesPage/>} />
                <Route path={"/monographs"} element={<MonographsPage/>} />
                <Route path={"/manuals"} element={<ManualsPage/>} />
                <Route path={"/internship"} element={<InternshipPage/>} />
                <Route path={"/payment"} element={<PaymentPage/>} />
                <Route path={"/contacts"} element={<ContactsPage/>} />
                <Route path={"*"} element={<Spinner/>} />
            </Routes>
        )
    }
   if (isAuth) {
       return (
           <Routes>
               <Route path={"/"} element={<MainPage/>} />
               <Route path={"/conferences"} element={<СonferencesPage/>} />
               <Route path={"/monographs"} element={<MonographsPage/>} />
               <Route path={"/manuals"} element={<ManualsPage/>} />
               <Route path={"/internship"} element={<InternshipPage/>} />
               <Route path={"/payment"} element={<PaymentPage/>} />
               <Route path={"/contacts"} element={<ContactsPage/>} />
               <Route path={"/account"} element={<AccountPage/>} />
               <Route path={"/conferences/scheduled-conferences-page"}  element={<ScheduledConferencesPage/>} />
               <Route path={"/conferences/submission-execution-theses"} element={<SubmissionExecutionTheses/>} />
               <Route path={"/conferences/ethics-publications"} element={<EthicsPublications/>} />
               <Route path={"/conferences/indexing"} element={<IndexingConferencesPage/>} />
               <Route path={"/conferences/literature-analysis"} element={<LiteratureAnalysisPage/>} />
               <Route path={"/conferences/editorial-board"} element={<EditorialboardPage/>} />
               <Route path={"/monographs/planned-monographs"} element={<PlannedMonographsPage/>} />
               <Route path={"/monographs/presentation-design-monographs"} element={<PresentationDesignMonographsPage/>} />
               <Route path={"/monographs/literature-analysis"} element={<LiteratureAnalysisPage/>} />
               <Route path={"/monographs/reviewers-page"} element={<ReviewersPage/>} />
               <Route path={"/monographs/indexing-monographs"} element={<IndexingMonographsPage/>} />
               <Route path={"/monographs/ethics-publication-monographs-page"} element={<EthicsPublicationMonographsPage/>} />
               <Route path={"*"} element={<ErrorPage/>} />
           </Routes>
       )
   } else {
       return (
           <Routes>
               <Route path={"/"} element={<MainPage/>} />
               <Route path={"/conferences"} element={<СonferencesPage/>} />
               <Route path={"/monographs"} element={<MonographsPage/>} />
               <Route path={"/manuals"} element={<ManualsPage/>} />
               <Route path={"/internship"} element={<InternshipPage/>} />
               <Route path={"/payment"} element={<PaymentPage/>} />
               <Route path={"/contacts"} element={<ContactsPage/>} />
               <Route path={"/conferences/scheduled-conferences-page"}  element={<ScheduledConferencesPage/>} />
               <Route path={"/conferences/submission-execution-theses"} element={<SubmissionExecutionTheses/>} />
               <Route path={"/conferences/ethics-publications"} element={<EthicsPublications/>} />
               <Route path={"/conferences/indexing"} element={<IndexingConferencesPage/>} />
               <Route path={"/conferences/editorial-board"} element={<EditorialboardPage/>} />
               <Route path={"/conferences/literature-analysis"} element={<LiteratureAnalysisPage/>} />
               <Route path={"/monographs/planned-monographs"} element={<PlannedMonographsPage/>} />
               <Route path={"/monographs/presentation-design-monographs"} element={<PresentationDesignMonographsPage/>} />
               <Route path={"/monographs/literature-analysis"} element={<LiteratureAnalysisPage/>} />
               <Route path={"/monographs/reviewers-page"} element={<ReviewersPage/>} />
               <Route path={"/monographs/indexing-monographs"} element={<IndexingMonographsPage/>} />
               <Route path={"/monographs/ethics-publication-monographs-page"} element={<EthicsPublicationMonographsPage/>} />
               <Route path={"/authorization"} element={<AuthorizationPage/>} />
               <Route path={"/registration"} element={<RegistrationPage/>} />
               <Route path={"*"} element={<ErrorPage/>} />
           </Routes>
       )
   }
}