import {Route, Routes} from "react-router-dom";

import HomePage from "../../pages/HomePage.tsx";
import UsersPage from "../../pages/UsersPage.tsx";
import UserItemPage from "../../pages/UserItemPage.tsx";
import Layout from "../Layout/Layout.tsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='/users' element={<UsersPage />} />
                <Route path='/users/:id' element={<UserItemPage />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;