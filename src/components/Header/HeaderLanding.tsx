import logo from "../../assets/images/logo.png";
import styles from './HeaderLanding.module.css';

const HeaderLanding = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="Логотип компании"/>
                <p>EastCalendar</p>
            </div>
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}><a href="#"><span>Премиум</span></a></li>
                <li className={styles.navbarItem}><a href="#">О проекте</a></li>
                <li className={styles.navbarItem}><a href="/login">Войти</a></li>
            </ul>
        </header>
    );
};

export default HeaderLanding;