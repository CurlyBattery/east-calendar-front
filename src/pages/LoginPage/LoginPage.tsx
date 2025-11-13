import styles from './LoginPage.module.css';
import logo from '../../assets/images/logo.png';
import {useState} from "react";
import {Link} from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={styles.loginContainer}>
            <div className={styles.wrapper}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Логотип компании"/>
                    <p>EastCalendar</p>
                </div>
                <form className={styles.loginForm}>
                    <input
                        className={styles.loginItem}
                        type='email'
                        placeholder='Почта'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className={styles.loginItem}
                        type='password'
                        placeholder='Пароль'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type='button'
                        className={styles.loginButton}
                    >
                        Войти
                    </button>
                </form>
                <div className={styles.notHaveAccount}>
                    Нет аккаунта? <Link to='/register'>Зарегистрируйтесь</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;