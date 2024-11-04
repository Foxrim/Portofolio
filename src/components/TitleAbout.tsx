import styles from "../styles/TitleAbout.module.css";

export default function TitleAbout() {

    return (
        <div className={styles.title}>
            <h2>À propos</h2>
            <hr className={styles.titleAboutHrRight} />
            <hr className={styles.titleAboutHrBottom} />
        </div>
    )
}