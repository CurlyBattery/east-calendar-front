import {Route, Routes} from "react-router-dom";

import './index.css';
import AppLayout from "./components/Layout/AppLayout.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.tsx";
import LandingLayout from "./components/Layout/LandingLayout.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import UsersPage from "./pages/UsersPage/UsersPage.tsx";
import UserItemPage from "./pages/UsersItemPage/UserItemPage.tsx";

function App() {
    return (
        <Routes>
            <Route element={<LandingLayout />}>
                <Route path='/' element={<HomePage />}/>
            </Route>
            <Route element={<AppLayout />}>
                <Route path='/users' element={<UsersPage />}/>
                <Route path='/users/:id' element={<UserItemPage />}/>
                <Route path='/register' element={<RegistrationPage />}/>
                <Route path='/login' element={<LoginPage />}/>
            </Route>
        </Routes>
    )
}

export default App
