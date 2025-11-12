import './index.css';
import {Route, Routes} from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.tsx";
import LandingLayout from "./components/Layout/LandingLayout.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import UserItemPage from "./pages/UserItemPage.tsx";

function App() {
  const isAuth = false;

    return (
        <Routes>
            {!isAuth && (
                    <Route element={<LandingLayout />}>
                        <Route path='/' element={<HomePage />}/>
                    </Route>
                )
            }
          <Route element={<AppLayout isAuth={isAuth}/>}>
            {isAuth
                ? (
                    <>
                        <Route path='/users' element={<UsersPage />}/>
                        <Route path='/users/:id' element={<UserItemPage />}/>
                    </>
                )
                : (
                    <>
                        <Route path='/register' element={<RegistrationPage />}/>
                    </>
                )
            }
          </Route>
        </Routes>
    )
}

export default App
