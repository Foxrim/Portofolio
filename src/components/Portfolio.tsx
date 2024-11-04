import styles from "../styles/Portfolio.module.css"
import CardPortfolio from "./CardPortfolio"
import TitlePortfolio from "./TitlePortfolio"

import data from "../data/data.json"

export default function Portfolio() {

    return (
        <section id="projets" className={styles.portfolio} >
            <div className={styles.titlePortfolio} >
            <TitlePortfolio/>
            </div>
            <div className={styles.cardPortfolioContainer} >
                {data.cardProjet.map((card) => (
                    <CardPortfolio key={card.id} image={card.image} title={card.title} description={card.description} objectif={card.objectif} tech={card.tech} date={card.date} link={card.link}/>
                ))}   
            </div>
        </section>
    )
}