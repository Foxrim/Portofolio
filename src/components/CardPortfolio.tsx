import styles from "../styles/CardPortfolio.module.css"
import CardDescPortfolio from "./CardDescPortfolio";

interface cardPortfolioConfig {
    image: string;
    title: string;
    description: string;
    objectif: string;
    tech: string;
    date: string;
    link: string;
}

export default function CardPortfolio( { image, title, description, objectif, tech, date, link } : cardPortfolioConfig ) {


    return (
        <>
        <div className={styles.cardPortfolio}>
            <figure>
                <img src={image} alt={title} />
            </figure>
            <h3>{title}</h3>
            <span>Voir plus <i className="material-icons">arrow_forward_ios</i></span>
            <div>
                <CardDescPortfolio description={description} objectif={objectif} tech={tech} date={date} link={link} title={title} />
            </div>
        </div>
        </>
    )
}

