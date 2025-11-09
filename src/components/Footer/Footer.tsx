import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.main}>
                <p>© 2025 East Calendar</p>
                <div className={styles.right}>
                    <ul>
                        <li>Authors</li>
                        <li><div className={styles.stick}></div></li>
                        <li>Contact</li>
                    </ul>
                    <p>🇷🇺 Russia</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
