const Header = ({isAuth}) => {
    return (
        <>
            {isAuth ? (
                <>
                    <header>
                        AuthHeader
                    </header>
                </>
            ) : (
                <header>
                    NotAuthHeader
                </header>
            )
            }
        </>
    );
};

export default Header;
