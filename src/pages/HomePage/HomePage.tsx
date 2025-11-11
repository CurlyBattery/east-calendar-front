import { GoTasklist } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { FaFileAlt } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";

import styles from './HomePage.module.css';
import homeSectionHero from '../../assets/images/homeSectionHero.png';

const HomePage = () => {
    return (
        <div className={styles.main}>
            <section className={styles.hero}>
                <div className={styles.left}>
                    <img src={homeSectionHero} alt="Иконка часов"/>
                </div>
                <div className={styles.right}>
                    <div className={styles.heroTextBlock}>
                        <h4 className={styles.headerForHero}>Планируй задачи и проектируй с умом</h4>
                        <p className={styles.termin}>
                            EastCalendar - <i>это простой и удобный календарь для личных и командных задач. Управляй
                            временем,
                            ставь приоритеты и получай напоминания - всё в одном месте.</i>
                        </p>
                        <a href="#">Создать аккаунт &gt;</a>
                    </div>
                </div>
            </section>
            <section className={styles.howItWork}>
                <h4 className={styles.headerForHowItWork}>Как это работает</h4>
                <div className={styles.blockCards}>
                    <div className={`${styles.card} ${styles.cardCreate}`}>
                        <h5 className={styles.title}>Создай задачу</h5>
                        <p className={styles.description}>Укажи дату, время и приритет.</p>
                    </div>
                    <div className={`${styles.card} ${styles.cardNotification}`}>
                        <h5 className={styles.title}>Настрой напоминание</h5>
                        <p className={styles.description}>Не пропусти важное.</p>
                    </div>
                    <div className={`${styles.card} ${styles.cardPlan}`}>
                        <h5 className={styles.title}>Планируй</h5>
                        <p className={styles.description}>Смотри все задачи на одном календаре.</p>
                    </div>
                </div>
            </section>
            <section className={styles.prices}>
                <h4 className={styles.headerForPrices}>Че по ценам</h4>
                <table className={styles.pricesTable}>
                    <thead>
                    <tr className={styles.tableHeader}>
                        <th className={styles.redHeader}>Подписка</th>
                        <th className={styles.blueHeader}>Описание</th>
                        <th className={styles.greenHeader}>Цена</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className={styles.tableRow}>
                        <td>Free</td>
                        <td>Для личного использования — организуй день, учёбу, тренировки</td>
                        <td>0₽</td>
                    </tr >
                    <tr className={styles.tableRow}>
                        <td>Pro</td>
                        <td>Для команд — планируйте совместные проекты</td>
                        <td>300₽</td>
                    </tr>
                    <tr className={styles.tableRow}>
                        <td>Business</td>
                        <td>Для бизнеса — календарь с управлением доступом и аналитикой</td>
                        <td>999₽</td>
                    </tr>
                    </tbody>
                </table>
            </section>
            <section className={styles.functionality}>
                <h4 className={styles.headerForFunctionality}>Функциональность</h4>
                <ul className={styles.functionalityList}>
                    <li className={`${styles.functionalityItem} ${styles.left}`}>
                        <div className={styles.functionalityItemContent}>
                            <p>Задачи с приоритетом</p>
                            <GoTasklist />
                        </div>
                    </li>
                    <li className={`${styles.functionalityItem} ${styles.right}`}>
                        <div className={styles.functionalityItemContent}>
                            <IoNotificationsOutline/>
                            <p>Уведомления и напоминания</p>
                        </div>
                    </li>
                    <li className={`${styles.functionalityItem} ${styles.left}`}>
                        <div className={styles.functionalityItemContent}>
                            <p>Категории и метки</p>
                            <BiCategory />
                        </div>
                    </li>
                    <li className={`${styles.functionalityItem} ${styles.right}`}>
                        <div className={styles.functionalityItemContent}>
                            <FaFileAlt />
                            <p>Прикрепление файлов и ссылок</p>
                        </div>
                    </li>
                    <li className={`${styles.functionalityItem} ${styles.left}`}>
                        <div className={styles.functionalityItemContent}>
                            <p>Удобный интерфейс календаря</p>
                            <MdCalendarMonth />
                        </div>
                    </li>
                    <li className={`${styles.functionalityItem} ${styles.right}`}>
                        <div className={styles.functionalityItemContent}>
                            <FaDatabase />
                            <p>Безопасное хранение данных</p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default HomePage;
