import styles from "../styles/Home.module.css"

export default function Home() {

    return (
        <section className={styles.home} >
        <h2>Home</h2>
        <hr className={styles.homeHrTop} />
        <hr className={styles.homeHrRight} />
        <hr className={styles.ulHrLeft} />
        <hr className={styles.ulHrBottom} />
        <ul>
            <li>
                <a href="#about">À propos</a>
            </li>
            <li>
                <a href="#projets">Projets</a>
            </li>
            <li>
                <a href="#contacts">Contacts</a>
            </li>
        </ul>
        </section>
    )
}