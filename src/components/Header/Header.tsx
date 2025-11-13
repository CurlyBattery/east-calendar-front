import styles from './Header.module.css';
import {useTypeSelector} from "../../hooks/useTypeSelector.ts";
import logo from '../../assets/images/logo.png';
import {useActions} from "../../hooks/useActions.ts";

const Header = () => {
    const { isAuth } = useTypeSelector(state => state.auth);
    const { currentUser } = useTypeSelector(state => state.auth);
    const {logout} = useActions();

    const handleLogout = () => {
        logout();
    };

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <div className={styles.logoContainer}>
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
                        <button type='button' onClick={handleLogout}>Выйти</button>
                    </>

                )}
                <a href="#">Premium</a>
            </div>

        </header>
    );
};

export default Header;
