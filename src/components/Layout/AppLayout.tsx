import {Outlet} from "react-router-dom";
import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";

const AppLayout = () => {
    return (
        <>
            <Header />
            <main className='main'>
                <Outlet/>
            </main>
            <Footer />
        </>
    );
};

export default AppLayout;