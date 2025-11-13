import styles from './RegistrationPage.module.css';
import logo from '../../assets/images/logo.png';
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useActions} from "../../hooks/useActions.ts";
import {useTypeSelector} from "../../hooks/useTypeSelector.ts";

const RegistrationPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');

    const {register} = useActions();
    const navigate = useNavigate();
    const {  loading, isAuth, error } = useTypeSelector(state => state.auth)


    const handleRegister = async () => {
        register(email, password, name, avatarUrl);
    }

    useEffect(() => {
        if(isAuth) navigate('/users');
    }, [isAuth, navigate])

    return (
        <div className={styles.registerContainer}>
            <div className={styles.wrapper}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Логотип компании"/>
                    <p>EastCalendar</p>
                </div>
                <form className={styles.registerForm}>
                    <input
                        className={styles.registerItem}
                        type='email'
                        placeholder='Почта'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className={styles.registerItem}
                        type="password"
                        placeholder='Пароль'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        className={styles.registerItem}
                        type="text"
                        placeholder='Никнейм'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className={styles.registerItem}
                        type="text"
                        placeholder='Аватарка'
                        value={avatarUrl}
                        onChange={(e) => setAvatarUrl(e.target.value)}
                    />

                    {error && <div className={styles.errorMessage}>{error}</div>}

                    <button
                        type='button'
                        className={styles.registerButton}
                        onClick={handleRegister}
                    >
                        {loading ? 'Загрузка...' : 'Зарегистрироваться'}
                    </button>

                </form>
                <div className={styles.notHaveAccount}>
                    Есть аккаунт? <Link to='/login'>Войдите</Link>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;