import {Outlet} from "react-router-dom";
import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";

const AppLayout = ({isAuth}) => {
    return (
        <>
            <Header isAuth={isAuth}/>
            <main className='container'>
                <Outlet/>
            </main>
            <Footer isAuth={isAuth}/>
        </>
    );
};

export default AppLayout;