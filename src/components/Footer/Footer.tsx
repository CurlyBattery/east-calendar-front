import styles from './Footer.module.css';
import {useTypeSelector} from "../../hooks/useTypeSelector.ts";

const Footer = () => {
    const {isAuth} = useTypeSelector(state => state.auth);

    return (
        <>
            {isAuth && (
                <footer className={styles.footer}>
                    Footer
                </footer>
            )}
        </>
    )
};

export default Footer;
