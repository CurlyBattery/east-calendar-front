const Footer = ({isAuth}) => {
    return (
        <>
            {isAuth ? (
                <>
                    <footer>
                        Footer
                    </footer>
                </>
            ) : (
                <></>
            )
            }
        </>
    );
};

export default Footer;
