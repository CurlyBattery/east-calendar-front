import styles from './Header.module.css';
import logo from '../../assets/images/logo.jpg';

const Header = () => {
    const isAuth = false;

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="Логотип компании"/>
                <p>EastCalendar</p>
            </div>
            <ul>
                <li><a href="#"><span>Премиум</span></a></li>
                <li><a href="#">Пользователи</a></li>
                <li><a href="#">Календарь</a></li>
                <li><a href="#">О проекте</a></li>
                {isAuth
                    ? <li>
                        <button disabled>Выход</button>
                    </li>
                    : <li><a>Войти</a></li>
                }
            </ul>
        </header>
    );
};

export default Header;
