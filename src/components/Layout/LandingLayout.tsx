import {Outlet} from "react-router-dom";
import HeaderLanding from "../Header/HeaderLanding.tsx";
import FooterLanding from "../Footer/FooterLanding.tsx";

const LandingLayout = () => {
    return (
        <>
            <HeaderLanding/>
            <main className='container'>
                <Outlet/>
            </main>
            <FooterLanding/>
        </>
    );
};

export default LandingLayout;