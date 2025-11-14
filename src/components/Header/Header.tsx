import styles from './Header.module.css';
import {useTypeSelector} from "../../hooks/useTypeSelector.ts";
import logo from '../../assets/images/logo.png';
import {useActions} from "../../hooks/useActions.ts";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const { isAuth } = useTypeSelector(state => state.auth);
    const { currentUser } = useTypeSelector(state => state.auth);
    const {logout} = useActions();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
    };

    const handleNavigate = () => {
        navigate('/users')
    }

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <div className={styles.logoContainer} onClick={handleNavigate}>
                    <img src={logo} alt="Логотип компании"/>
                    <p>EastCalendar</p>
                </div>
                {isAuth && (
                    <ul className={styles.headerList}>
                        <li className={styles.headerItem}><a href="#">Tasks</a></li>
                        <li className={styles.headerItem}><a href="#">Calendar</a></li>
                        <li className={styles.headerItem}><a href="#">Users</a></li>
                        <li className={styles.headerItem}><a href="#">About</a></li>
                    </ul>
                )}
            </div>
            <div className={styles.right}>
                {isAuth && (
                    <>
                        <div className={styles.profile}>
                            {currentUser?.email}
                        </div>
                        <button className={styles.logout} type='button' onClick={handleLogout}>Выйти</button>
                    </>

                )}
                <a href="#" className={styles.premium}>Premium</a>
            </div>

        </header>
    );
};

export default Header;
