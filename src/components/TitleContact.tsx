import styles from "../styles/TitleContact.module.css"

export default function TitleContact() {

    return (
        <div className={styles.title}>
        <h2>Contacts</h2>
        <hr className={styles.titleAboutHrRight} />
        <hr className={styles.titleAboutHrBottom} />
        </div>
    )
}