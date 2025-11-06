import {Route, Routes} from "react-router-dom";

import HomePage from "./pages/HomePage.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import UserItemPage from "./pages/UserItemPage.tsx";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='/users' element={<UsersPage />} />
      <Route path='/users/:id' element={<UserItemPage />} />
    </Routes>
  )
}

export default App
