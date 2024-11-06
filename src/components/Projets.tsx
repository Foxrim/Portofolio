import { useState } from 'react';
import styles from "../styles/Projets.module.css";
import TitlePortfolio from "./TitlePortfolio";
import data from "../data/data.json";

interface Card {
    id: string;
    image: string;
    title: string;
    description: string;
    objectif: string;
    tech: string;
    date: string;
    link?: string;
}

export default function Projets() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedCard, setSelectedCard] = useState<Card | null>(null);

    const openModal = (card: Card) => {
        setSelectedCard(card);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedCard(null);
    };

    return (
        <section id="projets" className={styles.projets}>
            <div className={styles.titlePortfolio}>
                <TitlePortfolio />
            </div>

            {isModalVisible && selectedCard && (
                <div className={styles.overlay} onClick={closeModal}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <span className="material-icons" onClick={closeModal}>close</span>
                        <h3>{selectedCard.title}</h3>
                        <p>{selectedCard.date}</p>
                        <p>{selectedCard.description}</p>
                        <p>{selectedCard.objectif}</p>
                        <h4>{selectedCard.tech}</h4>
                        <a href={selectedCard.link} target="_blank" rel="noopener noreferrer">lien<i className="material-icons">arrow_forward_ios</i></a>
                    </div>
                </div>
            )}

            <div className={styles.cardContainer}>
                {data.cardProjet.map((card) => (
                    <div key={card.id} className={styles.portfolioCard}>
                        <figure>
                            <img src={card.image} alt={card.title} />
                        </figure>
                        <h3>{card.title}</h3>
                        <span onClick={() => openModal(card)}>Voir plus <i className="material-icons">arrow_forward_ios</i></span>
                    </div>
                ))}
            </div>
        </section>
    );
}