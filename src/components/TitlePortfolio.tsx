import styles from "../styles/TitlePortfolio.module.css"

export default function TitlePortfolio() {

    return (
        <div className={styles.title}>
            <h2>Projets</h2>
            <hr className={styles.titlePortfolioHrLeft} />
            <hr className={styles.titlePortfolioHrTop} />
        </div>
    )
}