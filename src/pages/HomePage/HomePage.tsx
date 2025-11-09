import styles from './HomePage.module.css';
import calendar from '../../assets/images/calendar.png';

const HomePage = () => {
    return (
        <div className={styles.main}>
            <section className={styles.hero}>
                <div className={styles.left}>
                    <img src={calendar} alt="Иконка календаря"/>
                </div>
                <div className={styles.right}>
                    <div className={styles.heroTextBlock}>
                        <h4 className={styles.headerForHero}>Планируй задачи и проектируй с умом</h4>
                        <p className={styles.termin}>
                            East Calendar - <i>это простой и удобный календарь для личных и командных задач. Управляй
                            временем,
                            ставь приоритеты и получай напоминания - всё в одном месте.</i>
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.howItWork}>
                <div className={styles.right}>
                    <div className={styles.heroTextBlock}>
                        <h4 className={styles.headerForHero}>Планируй задачи и проектируй с умом</h4>
                        <p className={styles.termin}>
                            East Calendar - <i>это простой и удобный календарь для личных и командных задач. Управляй
                            временем,
                            ставь приоритеты и получай напоминания - всё в одном месте.</i>
                        </p>
                    </div>
                </div>
                <div className={styles.left}>
                    <img src={calendar} alt="Иконка календаря"/>
                </div>
            </section>
            <section className={styles.forWhom}>
                <div className={styles.left}>
                    <img src={calendar} alt="Иконка календаря"/>
                </div>
                <div className={styles.right}>
                    <div className={styles.heroTextBlock}>
                        <h4 className={styles.headerForHero}>Планируй задачи и проектируй с умом</h4>
                        <p className={styles.termin}>
                            East Calendar - <i>это простой и удобный календарь для личных и командных задач. Управляй
                            временем,
                            ставь приоритеты и получай напоминания - всё в одном месте.</i>
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.functionality}>
                <div className={styles.right}>
                    <div className={styles.heroTextBlock}>
                        <h4 className={styles.headerForHero}>Планируй задачи и проектируй с умом</h4>
                        <p className={styles.termin}>
                            East Calendar - <i>это простой и удобный календарь для личных и командных задач. Управляй
                            временем,
                            ставь приоритеты и получай напоминания - всё в одном месте.</i>
                        </p>
                    </div>
                </div>
                <div className={styles.left}>
                    <img src={calendar} alt="Иконка календаря"/>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
