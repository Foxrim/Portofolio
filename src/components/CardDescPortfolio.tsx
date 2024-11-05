import styles from "../styles/CardDescPortfolio.module.css"

interface cardPortfolioConfig {
    title: string;
    description: string;
    objectif: string;
    tech: string;
    date: string;
    link: string;
}


export default function CardDescPortfolio( {title, date, description, objectif, tech, link } : cardPortfolioConfig) {

    return (
        <>
        <div className={styles.cardContainerVisible}>
            <div>
                <span className="material-icons">close</span>
                <h3>{title}</h3>
                <p>{date}</p>
                <p>{description}</p>
                <p>{objectif}</p>
                <h4>{tech}</h4>
                <a href={link} target="blank_">lien</a>
            </div>
        </div>
        </>
    )
}