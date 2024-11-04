import styles from "../styles/CardPortfolio.module.css"

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
        <div className={styles.cardPortfolio} >
            <figure>
                <img src={image} alt={title} />
            </figure>
            <h3>{title}</h3>
            <a href="">Voir plus <img src="https://portfolio-flavien-rousseau.netlify.app/src/assets/arrow-right.webp" alt="" /> </a>
            <div className={styles.cardPortfolio__hidden} >
                <div>
                    <h3>{title}</h3>
                    <p>{date}</p>
                    <p>{description}</p>
                    <p>{objectif}</p>
                    <h4>{tech}</h4>
                    <a href={link}>lien</a>
                </div>
            </div>
        </div>
    )
}