import styles from './LoginPage.module.css';
import logo from '../../assets/images/logo.png';
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useActions} from "../../hooks/useActions.ts";
import {useTypeSelector} from "../../hooks/useTypeSelector.ts";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {login} = useActions();
    const navigate = useNavigate();
    const { loading, isAuth, error } = useTypeSelector(state => state.auth);

    const handleLogin = () => {
        login(email, password);
    };

    useEffect(() => {
        if(isAuth) navigate('/users');
    }, [isAuth, navigate])

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

                    {error && <div className={styles.errorMessage}>{error}</div>}

                    <button
                        type='button'
                        className={styles.loginButton}
                        onClick={handleLogin}
                    >
                        {loading ? 'Загрузка...' : 'Войти'}
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