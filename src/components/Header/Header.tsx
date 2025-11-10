import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
    const isAuth = false;

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="Логотип компании"/>
                <p>EastCalendar</p>
            </div>
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}><a href="#"><span>Премиум</span></a></li>
                <li className={styles.navbarItem}><a href="#">Пользователи</a></li>
                <li className={styles.navbarItem}><a href="#">Календарь</a></li>
                <li className={styles.navbarItem}><a href="#">О проекте</a></li>
                {isAuth
                    ? <li className={styles.navbarItem}>
                        <button disabled>Выход</button>
                    </li>
                    : <li className={styles.navbarItem}><a>Войти</a></li>
                }
            </ul>
        </header>
    );
};

export default Header;
