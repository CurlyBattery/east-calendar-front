import styles from './FooterLanding.module.css';

const FooterLanding = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.main}>
                <p>© 2025 EastCalendar</p>
                <div className={styles.right}>
                    <ul>
                        <li><a href="#">Authors</a></li>
                        <li><div className={styles.stick}></div></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <p>🇷🇺 Russia</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterLanding;
