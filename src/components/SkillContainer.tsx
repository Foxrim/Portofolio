import styles from "../styles/SkillContainer.module.css"
import Skill from "./Skill";

import data from "../data/data.json"

export default function SkillContainer() {

    return (
        <section className={styles.skillContainer} >
            <h3>Compétences</h3>
            {data.skills.map((card) => (
                <Skill key={card.id} icon={card.icon} name={card.name} level={card.level} />
                ))}
            <button>Télécharger le CV</button>
        </section>
    )
}